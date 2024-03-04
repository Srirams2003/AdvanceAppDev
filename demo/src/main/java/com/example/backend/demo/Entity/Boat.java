package com.example.backend.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Boat_details")
public class Boat {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "boat_type")
    private String boatType;
    
    private String description;
    
    @Column(name = "total_rooms")
    private int totalRooms;

    @Column(name = "price_per_room")
    private double pricePerRoom;

    @Column(name = "available_rooms")
    private int availableRooms;

    @Column(name = "image_url")
    private String imageUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBoatType() {
        return boatType;
    }

    public void setBoatType(String boatType) {
        this.boatType = boatType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTotalRooms() {
        return totalRooms;
    }

    public void setTotalRooms(int totalRooms) {
        this.totalRooms = totalRooms;
    }

    public double getPricePerRoom() {
        return pricePerRoom;
    }

    public void setPricePerRoom(double pricePerRoom) {
        this.pricePerRoom = pricePerRoom;
    }

    public int getAvailableRooms() {
        return availableRooms;
    }

    public void setAvailableRooms(int availableRooms) {
        this.availableRooms = availableRooms;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boat(Long id, String boatType, String description, int totalRooms, double pricePerRoom, int availableRooms,
            String imageUrl) {
        this.id = id;
        this.boatType = boatType;
        this.description = description;
        this.totalRooms = totalRooms;
        this.pricePerRoom = pricePerRoom;
        this.availableRooms = availableRooms;
        this.imageUrl = imageUrl;
    }

    public Boat() {
        
    }
    // Constructors, getters, and setters
    
}
