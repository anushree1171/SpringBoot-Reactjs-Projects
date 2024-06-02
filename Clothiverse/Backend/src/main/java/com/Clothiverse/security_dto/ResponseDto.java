package com.Clothiverse.security_dto;


import com.Clothiverse.security_enum.AuthStatus;

public record ResponseDto(String token, AuthStatus authStatus) {
}
