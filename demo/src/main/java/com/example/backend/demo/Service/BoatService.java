package com.example.backend.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.demo.Entity.Boat;
import com.example.backend.demo.Repository.BoatRepository;
import java.util.List;

@Service
public class BoatService {

    @Autowired
    private BoatRepository boatRepository;

    public List<Boat> getAllBoats() {
        return boatRepository.findAll();
    }

    public Boat getBoatById(Long id) {
        return boatRepository.findById(id).orElse(null);
    }

    public Boat createBoat(String boatType, String description, String imageUrl, int totalRooms, double pricePerRoom) {
        Boat boat = new Boat();
        boat.setAvailableRooms(totalRooms);
        boat.setBoatType(boatType);
        boat.setDescription(description);
        boat.setImageUrl(imageUrl);
        boat.setTotalRooms(totalRooms);
        boat.setPricePerRoom(pricePerRoom);
        return boatRepository.save(boat);
    }
    

    public void deleteBoatById(Long id) {
        boatRepository.deleteById(id);
    }
}
