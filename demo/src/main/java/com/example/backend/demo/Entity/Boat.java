package com.example.backend.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "Boat_details")
public class Boat {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String boatType;
    
    @Lob
    private byte[] boatImage; 
    
    private String description;
    
    private int totalRooms;
    private double pricePerRoom;

    @Column(name = "available_rooms")
    private int availableRooms;


    
    public Boat() {
        
    }

    public Boat(String boatType, byte[] boatImage, String description, int totalRooms, double pricePerRoom,int availableRooms ) {
        this.boatType = boatType;
        this.boatImage = boatImage;
        this.description = description;
        this.totalRooms = totalRooms;
        this.pricePerRoom = pricePerRoom;
        this.availableRooms = totalRooms; 

    }
    
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

    public byte[] getBoatImage() {
        return boatImage;
    }

    public void setBoatImage(byte[] boatImage) {
        this.boatImage = boatImage;
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
    
   
}
