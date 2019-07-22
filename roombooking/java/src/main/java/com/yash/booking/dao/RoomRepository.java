package com.yash.booking.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yash.booking.beans.Room;

@Transactional
public interface RoomRepository extends JpaRepository<Room, Integer> {

	public Room findByRoomID(int roomId);

	@Modifying(clearAutomatically = true)
	@Query("update Room r set r.deleted = 1 where r.roomID = :roomID")
	public int roomDelete(@Param("roomID") int roomID);

	public Room save(Room room);
	
	public List<Room> findRoomByLocationLocationID(int locationId);

}
