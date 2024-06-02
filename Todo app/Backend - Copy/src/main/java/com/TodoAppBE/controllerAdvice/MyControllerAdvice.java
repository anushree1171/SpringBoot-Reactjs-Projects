package com.TodoAppBE.controllerAdvice;

import com.TodoAppBE.errorResponse.ErrorResponse;
import com.TodoAppBE.exceptions.RemainderIdNotFoundException;
import com.TodoAppBE.exceptions.TaskIdNotFoundException;
import com.TodoAppBE.exceptions.UsernameOrEmailIdExistsException;
import com.TodoAppBE.exceptions.UsernameOrEmailIdNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MyControllerAdvice {

    @ExceptionHandler(TaskIdNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<com.TodoAppBE.errorResponse.ErrorResponse> handleTaskIdNotFoundException(TaskIdNotFoundException ex){
        com.TodoAppBE.errorResponse.ErrorResponse error = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(RemainderIdNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<com.TodoAppBE.errorResponse.ErrorResponse> handleRemainderIdNotFoundException(RemainderIdNotFoundException ex){
        com.TodoAppBE.errorResponse.ErrorResponse error = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UsernameOrEmailIdNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UsernameOrEmailIdNotFoundException ex){
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UsernameOrEmailIdExistsException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> handleUsernameOrEmailIdExistsException(UsernameOrEmailIdExistsException ex){
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.CONFLICT.value(), ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }


}
