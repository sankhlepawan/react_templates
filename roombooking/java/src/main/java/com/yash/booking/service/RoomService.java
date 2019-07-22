package com.yash.booking.service;

import java.util.List;

import com.yash.booking.beans.Room;

public interface RoomService {
	List<Room> findAll();

	Room findRoomById(int roomId);

	int deleteById(int id);

	Room addRoom(Room room);
	
	Room updateRoom(Room room);
	
	List<Room> findRoomBylocationId(int locationId);
}
