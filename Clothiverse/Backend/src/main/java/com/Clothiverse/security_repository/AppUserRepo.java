package com.Clothiverse.security_repository;


import com.Clothiverse.security_entity.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepo extends MongoRepository<AppUser, String> {

    @Query(value = "{username:?0}")
    Object existByUsername(String username);

    @Query(value = "{username:?0}")
    Optional<AppUser> findByUsername(String username);
}
