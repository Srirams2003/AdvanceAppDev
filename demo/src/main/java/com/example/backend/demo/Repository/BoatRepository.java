package com.example.backend.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.backend.demo.Entity.Boat;

@Repository
public interface BoatRepository extends JpaRepository<Boat, Long> {
    // Custom query method to find a boat by its type
    Boat findByBoatType(String boatType);
    // @Query("SELECT SUM(b.noRooms) FROM Booking b WHERE b.boatType = ?1")
    // int getTotalBookedRoomsForBoatType(String boatType);
}
