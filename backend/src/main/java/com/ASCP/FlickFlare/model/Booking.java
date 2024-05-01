
package com.ASCP.FlickFlare.model;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "booking")
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long booking_id;
    @ManyToOne
    @JoinTable(
            name = "user_booking",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "booking_id")
    )
    private User bookingUser;

    @ManyToOne
    @JoinTable(
            name = "showtime_booking",
            joinColumns = @JoinColumn(name = "showtime_id"),
            inverseJoinColumns = @JoinColumn(name = "booking_id")
    )
    private Showtime bookedShowtime;

    @ManyToOne
    @JoinTable(
            name = "promotion_booking",
            joinColumns = @JoinColumn(name = "promotion_id"),
            inverseJoinColumns = @JoinColumn(name = "booking_id")
    )
    private Promotion bookPromotions;

    @Column
    private boolean bookingStatus;

    @Column
    private boolean refundable;


}
