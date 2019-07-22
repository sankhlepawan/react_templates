package com.yash.booking.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.booking.beans.Room;
import com.yash.booking.beans.RoomBooking;
import com.yash.booking.beans.User;
import com.yash.booking.dao.BookingRepository;
import com.yash.booking.service.BookingService;
import com.yash.booking.service.RoomService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ResponseMessage;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private RoomService roomService;

	Map<String, List<Map<String, String>>> responseMap = new HashMap<>();

	private ApiStatus<?> failStatus(String message) {
		return new ApiStatus<User>(ResponseMessage.FAILED_STATUS, message, null);
	}

	// Remoce extra call to room table
	@Override
	public Map<String, List<Map<String, String>>> fetchBookingsByDate(Date queryDate) {
		
		List<RoomBooking> listOfRoomBooking = bookingRepo.findByBookingDate(queryDate);
		
		for (RoomBooking roomBooking : listOfRoomBooking) {
			Map<String, String> timeSlotMap = new HashMap<>();
			timeSlotMap.put("startTime", roomBooking.getStartTime());
			timeSlotMap.put("endTime", roomBooking.getEndTime());
			if (responseMap.get(roomBooking.getRoom().getRoomName()) == null || responseMap.get(roomBooking.getRoom().getRoomName()).isEmpty()) {
				List<Map<String, String>> listOfTimeSlot = new ArrayList<>();
				listOfTimeSlot.add(timeSlotMap);
				responseMap.put(roomBooking.getRoom().getRoomName(), listOfTimeSlot);
			} else {
				responseMap.get(roomBooking.getRoom().getRoomName()).add(timeSlotMap);
			}

		}
		return responseMap;
	}
	
	@Override
	public ApiStatus addBooking(RoomBooking roomBooking) {

		// validate(//roomBooking)
		// String str = "08:03:10 pm";
		// DateFormat formatter = new SimpleDateFormat("hh:mm:ss a");
		// Date date = (Date)formatter.parse(str);

		RoomBooking newRoomBooking = bookingRepo.save(roomBooking);

		return new ApiStatus<RoomBooking>(ResponseMessage.SUCCESS_STATUS, ResponseMessage.BOOKING_SUCCESSFUL,
				newRoomBooking);
	}

	public boolean validate() {

		// List<RoomBooking> roomListByBookingDate =
		// bookingRepo.findByBookingDate(queryDate);
		return true;
	}

}
