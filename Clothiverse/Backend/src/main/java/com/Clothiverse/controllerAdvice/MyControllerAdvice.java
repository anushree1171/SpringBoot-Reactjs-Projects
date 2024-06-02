package com.Clothiverse.controllerAdvice;


import com.Clothiverse.errorResponse.MyErrorResponse;
import com.Clothiverse.exceptions.CustomerNotFoundException;
import com.Clothiverse.exceptions.ProductNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MyControllerAdvice {

    @ExceptionHandler(ProductNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public MyErrorResponse handleProductNotFoundException(ProductNotFoundException ex){
        //return new ResponseEntity<>(myErrorResponse, HttpStatus.NOT_FOUND);
        return new MyErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
    }

    @ExceptionHandler(CustomerNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public MyErrorResponse handleCustomerNotFoundException(CustomerNotFoundException ex){
        return new MyErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
    }
}
