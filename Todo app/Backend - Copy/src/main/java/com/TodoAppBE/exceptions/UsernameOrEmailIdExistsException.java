package com.TodoAppBE.exceptions;

public class UsernameOrEmailIdExistsException extends RuntimeException{

    public UsernameOrEmailIdExistsException(String message){
        super(message);
    }
}
