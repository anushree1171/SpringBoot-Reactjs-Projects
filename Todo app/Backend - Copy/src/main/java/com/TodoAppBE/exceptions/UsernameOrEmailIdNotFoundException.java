package com.TodoAppBE.exceptions;

public class UsernameOrEmailIdNotFoundException extends RuntimeException{

    public UsernameOrEmailIdNotFoundException(String message){
        super(message);
    }
}
