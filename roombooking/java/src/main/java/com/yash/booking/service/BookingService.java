package com.yash.booking.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.yash.booking.beans.RoomBooking;
import com.yash.booking.util.ApiStatus;

public interface BookingService {
	Map<String, List<Map<String, String>>> fetchBookingsByDate(Date queryDate);

	ApiStatus addBooking(RoomBooking roomBooking);
}
