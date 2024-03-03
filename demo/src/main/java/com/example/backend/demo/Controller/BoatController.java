// BoatController.java
package com.example.backend.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.demo.Entity.Boat;
import com.example.backend.demo.Service.BoatService;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
@RequestMapping("/boats")
public class BoatController {

    @Autowired
    private BoatService boatService;

    @GetMapping("/get")
    public ResponseEntity<List<Boat>> getAllBoats() {
        List<Boat> boats = boatService.getAllBoats();
        return new ResponseEntity<>(boats, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boat> getBoatById(@PathVariable Long id) {
        Boat boat = boatService.getBoatById(id);
        if (boat != null) {
            return new ResponseEntity<>(boat, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<Boat> createBoat(@RequestParam("boatType") String boatType,
                                            @RequestParam("description") String description,
                                            @RequestParam("image") MultipartFile image,
                                            @RequestParam("totalRooms") int totalRooms,
                                            @RequestParam("pricePerRoom") double pricePerRoom) {
        try {
            Boat boat = boatService.createBoat(boatType, description, image.getBytes(), totalRooms, pricePerRoom);
            return new ResponseEntity<>(boat, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoatById(@PathVariable Long id) {
        try {
            boatService.deleteBoatById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
