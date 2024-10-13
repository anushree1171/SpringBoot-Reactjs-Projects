package com.TodoAppBE.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name="Remainders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Remainder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String name;

    Date setOnDate;

    Date date;

    Time time;

    String status;

    Boolean trash;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;

}
