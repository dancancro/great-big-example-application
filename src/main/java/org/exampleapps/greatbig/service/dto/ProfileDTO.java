package org.exampleapps.greatbig.service.dto;


import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Lob;

/**
 * A DTO for the Profile entity.
 */
public class ProfileDTO implements Serializable {

    private Long id;

    private String username;

    @Lob
    private String bio;

    private String image;

    private Boolean following;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean isFollowing() {
        return following;
    }

    public void setFollowing(Boolean following) {
        this.following = following;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProfileDTO profileDTO = (ProfileDTO) o;
        if(profileDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), profileDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ProfileDTO{" +
            "id=" + getId() +
            ", username='" + getUsername() + "'" +
            ", bio='" + getBio() + "'" +
            ", image='" + getImage() + "'" +
            ", following='" + isFollowing() + "'" +
            "}";
    }
}
