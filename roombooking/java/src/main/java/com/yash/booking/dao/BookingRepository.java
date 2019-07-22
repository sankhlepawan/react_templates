package com.yash.booking.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.booking.beans.RoomBooking;

public interface BookingRepository extends JpaRepository<RoomBooking, Integer> {
	public List<RoomBooking> findByBookingDate(Date queryDate);

	public List<RoomBooking> findByRoomRoomID(int roomId);

}
