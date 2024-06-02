package com.Clothiverse.service;

import com.Clothiverse.entities.Address;

import java.util.List;

public interface AddressService {

    List<Address> getAllAddresses();

    Address getAddressById(String id);

    void saveAddress(Address a);

    void deleteAddressById(String id);

}
