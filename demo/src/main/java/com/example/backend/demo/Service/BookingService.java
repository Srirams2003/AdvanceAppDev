package com.example.backend.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.demo.Entity.Booking;
import com.example.backend.demo.Repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepository;
    public BookingService(BookingRepo bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(Booking booking) {
        
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.findByEmail(email);
    }
}
