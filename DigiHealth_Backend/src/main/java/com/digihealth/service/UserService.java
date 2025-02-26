package com.digihealth.service;

import com.digihealth.model.User;
import com.digihealth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Register User with Password Hashing
    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email is already registered.");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash the password before saving
        return userRepository.save(user);
    }

    // Authenticate User
    public Optional<User> authenticateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {
            User existingUser = user.get();

            // Compare entered password with stored hashed password
            if (passwordEncoder.matches(password, existingUser.getPassword())) {
                return Optional.of(existingUser);
            } else {
                throw new RuntimeException("Incorrect password."); 
            }
        } else {
            throw new RuntimeException("User not found.");
        }
    }
}
