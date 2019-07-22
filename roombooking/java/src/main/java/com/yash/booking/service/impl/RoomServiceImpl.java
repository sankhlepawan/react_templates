package com.yash.booking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.booking.beans.Room;
import com.yash.booking.beans.User;
import com.yash.booking.dao.RoomRepository;
import com.yash.booking.service.RoomService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ResponseMessage;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository roomRepo;

	private ApiStatus<?> failStatus(String message) {
		return new ApiStatus<User>(ResponseMessage.FAILED_STATUS, message, null);
	}

	@Override
	public List<Room> findAll() {
		return roomRepo.findAll();
	}

	@Override
	public Room findRoomById(int roomId) {
		return roomRepo.findByRoomID(roomId);
	}

	@Override
	public int deleteById(int id) {
		return roomRepo.roomDelete(id);
	}

	@Override
	public Room addRoom(Room room) {
		return roomRepo.save(room);
	}

	@Override
	public Room updateRoom(Room room) {
		return roomRepo.save(room);
	}

	@Override
	public List<Room> findRoomBylocationId(int locationId) {
		
		return  roomRepo.findRoomByLocationLocationID(locationId);
	}

}
