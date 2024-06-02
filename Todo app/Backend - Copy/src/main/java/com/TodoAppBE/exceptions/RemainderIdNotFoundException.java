package com.TodoAppBE.exceptions;

public class RemainderIdNotFoundException extends RuntimeException{

    public RemainderIdNotFoundException(String message){
        super(message);
    }
}
