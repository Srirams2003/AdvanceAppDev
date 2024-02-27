package com.example.backend.demo.Service;

import com.example.backend.demo.Entity.User;
import com.example.backend.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        Optional<User> userOptional = userRepository.findById(email);
        return userOptional.orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String email, User newUser) {
        Optional<User> userOptional = userRepository.findById(email);
        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            existingUser.setName(newUser.getName());
            existingUser.setDOB(newUser.getDOB());
            existingUser.setGender(newUser.getGender());
            existingUser.setPhone(newUser.getPhone());
            existingUser.setAddress(newUser.getAddress());
            return userRepository.save(existingUser);
        }
        return null;
    }

    public boolean deleteUser(String email) {
        Optional<User> userOptional = userRepository.findById(email);
        if (userOptional.isPresent()) {
            userRepository.delete(userOptional.get());
            return true;
        }
        return false;
    }
}
