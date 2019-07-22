package com.yash.booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.booking.beans.Room;
import com.yash.booking.service.RoomService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ResponseMessage;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/room")
//
public class RoomController {

	@Autowired
	private RoomService roomService;

	@GetMapping("/fetchAllRooms")
	public List<Room> retriveAllRooms() {
		return roomService.findAll();
	}

	@GetMapping("/fetchRoomById/{roomId}")
	public ResponseEntity<?> retriveRoom(@PathVariable int roomId) {
		Room room = roomService.findRoomById(roomId);

		return (room == null || room.getRoomID() < 0 ? sendErrorResponse(ResponseMessage.SOMETHING_WENT_WRONG)
				: ResponseEntity.status(HttpStatus.OK).body(room));
	}
	
	@GetMapping("/fetchRoomsByLocationId/{locationId}")
	public ResponseEntity<?> retriveRoomsByLoactionId(@PathVariable int locationId) {
		List<Room> listOfRoomsByLocationId = roomService.findRoomBylocationId(locationId);

		return (listOfRoomsByLocationId == null || listOfRoomsByLocationId.size() <= 0 ? sendErrorResponse(ResponseMessage.SOMETHING_WENT_WRONG)
				: ResponseEntity.status(HttpStatus.OK).body(listOfRoomsByLocationId));
	}

	// Deleting multiple time same room
	@DeleteMapping("/deleteRoom/{roomId}")
	public ResponseEntity<ApiStatus<?>> deleteRoom(@PathVariable("roomId") int roomId) {

		int status = roomService.deleteById(roomId);

		ApiStatus<String> apiStatusBody = new ApiStatus<String>(
				status != 0 ? ResponseMessage.SUCCESS_STATUS : ResponseMessage.FAILED_STATUS,
				status != 0 ? ResponseMessage.ROOM_DELETED : ResponseMessage.SOMETHING_WENT_WRONG, null);
		
		return ResponseEntity.status(HttpStatus.OK).body(apiStatusBody);
	}

	// remove extra variable
	@PostMapping("/addNewRoom")
	public ResponseEntity<?> addRoom(@RequestBody Room room) {
		Room savedRoom = roomService.addRoom(room);

		String stat = ResponseMessage.SUCCESS_STATUS;
		String message = ResponseMessage.ROOM_ADD_SUCCESS;

		return (savedRoom == null || savedRoom.getRoomID() < 0 ? sendErrorResponse(ResponseMessage.SOMETHING_WENT_WRONG)
				: ResponseEntity.status(HttpStatus.OK).body(new ApiStatus(stat, message, null)));

	}

	//remove extra variable
	@PutMapping("/updateRoom")
	public ResponseEntity<Object> updateRoom(@RequestBody Room room) {
		Room savedRoom = roomService.addRoom(room);
		String stat = ResponseMessage.SUCCESS_STATUS;
		String message = ResponseMessage.ROOM_UPDATED;

		if (savedRoom == null) {
			stat = ResponseMessage.FAILED_STATUS;
			message = ResponseMessage.SOMETHING_WENT_WRONG;
		}

		return ResponseEntity.status(HttpStatus.OK).body(new ApiStatus(stat, message, null));
	}

	private ResponseEntity<?> sendErrorResponse(String message) {
		return ResponseEntity.status(HttpStatus.OK).body(new ApiStatus(ResponseMessage.FAILED_STATUS, message, null));
	}
}
