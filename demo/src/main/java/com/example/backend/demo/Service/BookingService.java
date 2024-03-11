package com.example.backend.demo.Service;
import com.example.backend.demo.Entity.Booking;
import com.example.backend.demo.Entity.Boat;
import com.example.backend.demo.Repository.BookingRepo;
import com.example.backend.demo.Repository.BoatRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepository;

    @Autowired
    private BoatRepository boatRepository;

    public Booking createBooking(Booking booking) {
        // Save the booking
        Booking createdBooking = bookingRepository.save(booking);

        // Update available rooms for the booked boat type
        String boatType = booking.getBoatType();
        int bookedRooms = booking.getNoRooms();

        Boat boat = boatRepository.findByBoatType(boatType);
        if (boat != null) {
            int availableRooms = boat.getAvailableRooms();
            if (availableRooms >= bookedRooms) {
                boat.setAvailableRooms(availableRooms - bookedRooms);
                boatRepository.save(boat);
            } else {
                // Handle insufficient available rooms scenario
                // For example, throw an exception or log a message
            }
        } else {
            // Handle scenario where boat type is not found
            // For example, throw an exception or log a message
        }

        return createdBooking;
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.findByEmail(email);
    }
}
