package org.exampleapps.greatbig.web.websocket;

import org.exampleapps.greatbig.security.SecurityUtils;
import org.exampleapps.greatbig.web.websocket.dto.MessageDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.security.Principal;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.exampleapps.greatbig.domain.Message;
import org.exampleapps.greatbig.repository.MessageRepository;
import org.exampleapps.greatbig.repository.search.MessageSearchRepository;
import static org.exampleapps.greatbig.config.WebsocketConfiguration.IP_ADDRESS;

@Controller
public class ChatService implements ApplicationListener<SessionDisconnectEvent> {

    private static final Logger log = LoggerFactory.getLogger(ChatService.class);

    private final MessageRepository messageRepository;

    private final MessageSearchRepository messageSearchRepository;

    private DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private final SimpMessageSendingOperations messagingTemplate;

    public ChatService(SimpMessageSendingOperations messagingTemplate, MessageRepository messageRepository, MessageSearchRepository messageSearchRepository) {
        this.messagingTemplate = messagingTemplate;
        this.messageRepository = messageRepository;
        this.messageSearchRepository = messageSearchRepository;
    }


    @SubscribeMapping("/chat/public")
    public void subscribe(StompHeaderAccessor stompHeaderAccessor, Principal principal) {
        String login = SecurityUtils.getCurrentUserLogin();
        String ipAddress = stompHeaderAccessor.getSessionAttributes().get(IP_ADDRESS).toString();
        log.debug("User {} subscribed to Chat from IP {}", login, ipAddress);
        MessageDTO messageDTO = new MessageDTO();
        messageDTO.setUserLogin("System");
        messageDTO.setCreatedAt(ZonedDateTime.now());
        messageDTO.setMessage(login + " joined the chat");
        messagingTemplate.convertAndSend("/chat/public", messageDTO);
    }

    @MessageMapping("/chat")
    @SendTo("/chat/public")
    public MessageDTO sendChat(@Payload MessageDTO messageDTO, StompHeaderAccessor stompHeaderAccessor, Principal principal) {
        messageDTO.setUserLogin(principal.getName());
        return setupMessageDTO(messageDTO, stompHeaderAccessor, principal);
    }

    @Override
    public void onApplicationEvent(SessionDisconnectEvent event) {
        // when the user disconnects, send a message saying that hey are leaving
        log.info("{} disconnected from the chat websockets", event.getUser().getName());
        MessageDTO messageDTO = new MessageDTO();
        messageDTO.setUserLogin("System");
        messageDTO.setCreatedAt(ZonedDateTime.now());
        messageDTO.setMessage(event.getUser().getName() + " left the chat");
        messagingTemplate.convertAndSend("/chat/public", messageDTO);
    }

    private MessageDTO setupMessageDTO (MessageDTO messageDTO, StompHeaderAccessor stompHeaderAccessor, Principal principal) {
        messageDTO.setCreatedAt(ZonedDateTime.now());

        // save message to database
        Message message = new Message();
        message.setUserLogin(messageDTO.getUserLogin());
        message.setMessage(messageDTO.getMessage());
        message.setCreatedAt(messageDTO.getCreatedAt());
        Message result = messageRepository.save(message);
        messageSearchRepository.save(result);
        messageDTO.setId(message.getId());

        log.debug("Sending user chat data {}", messageDTO);
        return messageDTO;
    }
}
