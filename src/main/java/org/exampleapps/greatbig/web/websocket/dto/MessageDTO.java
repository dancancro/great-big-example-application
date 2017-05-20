package org.exampleapps.greatbig.web.websocket.dto;

import java.time.ZonedDateTime;

/**
 * DTO for storing a user's message.
 */
public class MessageDTO {

    private Long id;

    private String userLogin;

    private String message;

    private ZonedDateTime createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "MessageDTO{" +
            ", message='" + getMessage() + '\'' +
            ", createdAt='" + getCreatedAt() + '\'' +
            '}';
    }
}
