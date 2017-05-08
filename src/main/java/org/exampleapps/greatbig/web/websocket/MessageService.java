package org.exampleapps.greatbig.web.websocket;

import org.exampleapps.greatbig.security.SecurityUtils;
import org.exampleapps.greatbig.web.websocket.dto.MessageDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.security.Principal;
import java.util.Calendar;

import static org.exampleapps.greatbig.config.WebsocketConfiguration.IP_ADDRESS;

@Controller
public class MessageService implements ApplicationListener<SessionDisconnectEvent> {

    private static final Logger log = LoggerFactory.getLogger(MessageService.class);

    private DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private final SimpMessageSendingOperations messagingTemplate;

    public MessageService(SimpMessageSendingOperations messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @SubscribeMapping("/topic/message")
    @SendTo("/topic/message")
    public MessageDTO sendMessage(@Payload MessageDTO messageDTO, StompHeaderAccessor stompHeaderAccessor,
            Principal principal) {
        messageDTO.setUserLogin(SecurityUtils.getCurrentUserLogin());
        messageDTO.setUserLogin(principal.getName());
        messageDTO.setSessionId(stompHeaderAccessor.getSessionId());
        messageDTO.setIpAddress(stompHeaderAccessor.getSessionAttributes().get(IP_ADDRESS).toString());
        Instant instant = Instant.ofEpochMilli(Calendar.getInstance().getTimeInMillis());
        messageDTO.setTime(dateTimeFormatter.format(ZonedDateTime.ofInstant(instant, ZoneOffset.systemDefault())));
        log.debug("Sending user tracking data {}", messageDTO);
        return messageDTO;
    }

    @Override
    public void onApplicationEvent(SessionDisconnectEvent event) {
        MessageDTO messageDTO = new MessageDTO();
        messageDTO.setSessionId(event.getSessionId());
        messageDTO.setPage("logout");
        messagingTemplate.convertAndSend("/topic/message", messageDTO);
    }
}
