package com.example.backend.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.demo.Entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,String> {
    
}
