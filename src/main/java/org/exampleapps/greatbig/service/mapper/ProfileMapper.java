package org.exampleapps.greatbig.service.mapper;

import org.exampleapps.greatbig.domain.*;
import org.exampleapps.greatbig.service.dto.ProfileDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Profile and its DTO ProfileDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ProfileMapper extends EntityMapper<ProfileDTO, Profile> {



    default Profile fromId(Long id) {
        if (id == null) {
            return null;
        }
        Profile profile = new Profile();
        profile.setId(id);
        return profile;
    }
}
