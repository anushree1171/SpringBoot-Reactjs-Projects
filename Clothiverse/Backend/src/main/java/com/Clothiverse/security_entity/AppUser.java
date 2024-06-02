package com.Clothiverse.security_entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Users")
public class AppUser {

    @Id
    String userId;

    String firstName;

    String lastName;

    @Indexed(unique = true)
    String emailId;

    @Indexed(unique = true)
    String username;

    String password;

    List<GrantedAuthority> authorityList;
}
