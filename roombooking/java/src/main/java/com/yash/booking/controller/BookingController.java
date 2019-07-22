package com.yash.booking.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.booking.beans.RoomBooking;
import com.yash.booking.service.BookingService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ResponseMessage;
import com.yash.booking.util.RestEndPoints;

@RestController
@RequestMapping(RestEndPoints.BOOKING)
@CrossOrigin(origins = "*")
public class BookingController {

	@Autowired
	private BookingService bookingService;

	Map<String, List<Map<String, String>>> responseMap;

	// Need to resolve key-value
	@GetMapping("/fetchBookingByDate/{queryDate}")
	public ResponseEntity<?> fetchBookingsByDate(@PathVariable("queryDate") String queryDate) throws ParseException {
		Date date = new SimpleDateFormat("dd-MM-yyyy").parse(queryDate);
		responseMap = bookingService.fetchBookingsByDate(date);
		return (responseMap == null) ? sendErrorResponse(ResponseMessage.NO_BOOKINGS_AVAILABLE)
				: ResponseEntity.status(HttpStatus.OK).body(responseMap);

	}

	// Add appropriate type
	private ResponseEntity<?> sendErrorResponse(String message) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new ApiStatus(ResponseMessage.FAILED_STATUS, message, null));
	}

	@PostMapping("/addBookings")
	public ResponseEntity<?> addBooking(@RequestBody RoomBooking roomBooking) {
		ApiStatus<?> apiStatus = bookingService.addBooking(roomBooking);
		return (apiStatus != null) ? ResponseEntity.status(HttpStatus.OK).body(apiStatus)
				: ResponseEntity.status(HttpStatus.OK).body(apiStatus);

	}

}
