package com.Clothiverse.controller;


import com.Clothiverse.entities.Address;
import com.Clothiverse.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping("/saveAddress")
    public String saveAddress(@RequestBody Address a){
        addressService.saveAddress(a);
        return "Success";
    }

    @GetMapping("/getAllAddresses")
    public List<Address> getAllAddresses(){
        return addressService.getAllAddresses();
    }

    @GetMapping("/getAddress/{id}")
    public Address getAddressById(@PathVariable String id){
        return addressService.getAddressById(id);
    }

    @PutMapping("/updateAddress/{id}")
    public String updateAddress(@PathVariable String id, @RequestBody Address a){
        a.setA_id(id);
        addressService.saveAddress(a);
        return "Success";
    }

    @DeleteMapping("/deleteAddress/{id}")
    public String deleteAddress(@PathVariable String id){
        addressService.deleteAddressById(id);
        return "Success";
    }

}
