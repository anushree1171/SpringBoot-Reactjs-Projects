package com.Clothiverse.errorResponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MyErrorResponse {

    private int statusCode;

    private String message;

    public MyErrorResponse(String message){
        this.message = message;
    }
}
