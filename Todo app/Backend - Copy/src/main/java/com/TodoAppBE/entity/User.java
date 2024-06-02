package com.TodoAppBE.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int user_id;

    String name;

    String username;

    String password;

    String emailId;

    List<GrantedAuthority> grantedAuthorityList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Task> taskList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Remainder> reminderList;

}
