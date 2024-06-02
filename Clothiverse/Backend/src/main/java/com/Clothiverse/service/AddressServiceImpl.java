package com.Clothiverse.service;



import com.Clothiverse.entities.Address;
import com.Clothiverse.repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    AddressRepo addressRepo;

    @Override
    public List<Address> getAllAddresses() {
        return addressRepo.findAll();
    }

    @Override
    public Address getAddressById(String id) {
        return addressRepo.findById(id).orElse(null);
    }

    @Override
    public void saveAddress(Address a) {
        addressRepo.save(a);
    }

    @Override
    public void deleteAddressById(String id) {
        addressRepo.deleteById(id);
    }
}
