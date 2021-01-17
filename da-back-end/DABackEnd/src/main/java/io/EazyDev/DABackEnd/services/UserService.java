package io.EazyDev.DABackEnd.services;

import io.EazyDev.DABackEnd.models.User;
import io.EazyDev.DABackEnd.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    public List<User> getAllUsers() {

        return userRepo.findAll();
    }
}
