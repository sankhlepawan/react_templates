package com.yash.booking.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yash.booking.beans.Location;
import com.yash.booking.beans.User;



public interface LocationService {

	List<Location> findAll(int page,int limit);
	Location addLocation(Location location);
	int locationDelete(int id);
	Location update(Location location);


}
