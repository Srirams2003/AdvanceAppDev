package com.example.backend.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.demo.Entity.Boat;
import com.example.backend.demo.Repository.BoatRepository;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class BoatService {

    @Autowired
    private BoatRepository boatRepository;


    public List<Boat> getAllBoats() {
        return boatRepository.findAll();
    }

    public Boat getBoatById(Long id) {
        Optional<Boat> boatOptional = boatRepository.findById(id);
        return boatOptional.orElse(null);
    }

    public Boat createBoat(String boatType, String description, byte[] imageData, int totalRooms, double pricePerRoom) throws IOException {
        Boat boat = new Boat();
        boat.setBoatType(boatType);
        boat.setDescription(description);
        boat.setBoatImage(imageData);
        boat.setTotalRooms(totalRooms);
        boat.setPricePerRoom(pricePerRoom);
        return boatRepository.save(boat);
    }

    public void updateAvailableRooms(String boatType, int bookedRooms) {
        Boat boat = boatRepository.findByBoatType(boatType); 
        if (boat != null) {
            int availableRooms = boat.getAvailableRooms() - bookedRooms;
            boat.setAvailableRooms(availableRooms);
            boatRepository.save(boat);
        }
    }
    

    public void deleteBoatById(Long id) {
        boatRepository.deleteById(id);
    }

    
}
