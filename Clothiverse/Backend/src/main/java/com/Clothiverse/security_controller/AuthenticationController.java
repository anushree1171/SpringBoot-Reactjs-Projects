package com.Clothiverse.security_controller;



import com.Clothiverse.entities.Customer;
import com.Clothiverse.security_dto.RequestDto;
import com.Clothiverse.security_dto.ResponseDto;
import com.Clothiverse.security_enum.AuthStatus;
import com.Clothiverse.security_service.AuthService;
import com.Clothiverse.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthenticationController {

    private final AuthService authService;

    @Autowired
    CustomerService customerService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDto> login(@RequestBody RequestDto requestDto){
        try{
            var jwtToken = authService.login(requestDto.username(), requestDto.password());
            var authResponseDto = new ResponseDto(jwtToken, AuthStatus.LOGIN_SUCCESS);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(authResponseDto);
        }
        catch(Exception e){
            System.out.println(e);
            var responseDto = new ResponseDto(null, AuthStatus.LOGIN_FAILED);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(responseDto);
        }
    }

    @PostMapping("/sign-up")
    public ResponseEntity<ResponseDto> signup(@RequestBody RequestDto requestDto){

        try{
            var jwtToken = authService.signUp(requestDto.firstName(), requestDto.lastName(), requestDto.username(), requestDto.password(), requestDto.emailId());

            Customer customer = new Customer();
            customer.setFirstName(requestDto.firstName());
            customer.setLastName(requestDto.lastName());
            customer.setUsername(requestDto.username());
            customer.setPassword(requestDto.password());
            customer.setEmailId(requestDto.emailId());

            customerService.addCustomer(customer);

            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(jwtToken, AuthStatus.USER_CREATED_SUCCESSFULLY));
        }
        catch (Exception e){
            System.out.println(e);
            var responseDto = new ResponseDto(null, AuthStatus.USER_NOT_CREATED_SUCCESSFULLY);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(responseDto);
        }
    }
}
