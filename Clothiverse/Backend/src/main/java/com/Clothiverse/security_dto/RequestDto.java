package com.Clothiverse.security_dto;

import java.util.Date;

public record RequestDto(String firstName, String lastName, String username, String password, String emailId, String gender, Date dob){
}
