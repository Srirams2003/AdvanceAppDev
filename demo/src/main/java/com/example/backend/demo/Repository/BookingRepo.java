package com.example.backend.demo.Repository;

import com.example.backend.demo.Entity.Booking;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {
    List<Booking> findByEmail(String email);
}
