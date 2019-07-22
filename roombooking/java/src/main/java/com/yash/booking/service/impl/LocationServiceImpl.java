package com.yash.booking.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.yash.booking.beans.Location;
import com.yash.booking.beans.User;
import com.yash.booking.dao.LocationRepository;
import com.yash.booking.service.LocationService;

@Service
public class LocationServiceImpl implements LocationService{

	@Autowired
	LocationRepository repo;
		
	@Override
	public List<Location> findAll(int page,int limit) {
		
		return	(page==0 && limit==0) ? repo.findByDeleted(false ,null):
			 repo.findByDeleted(false ,PageRequest.of(page, limit));

	}

	@Override
	public Location addLocation(Location location) {
		
		Location oldLocation = null;
		if(location.getLocationName() != null) {
			oldLocation = repo.findByLocationNameAndDeleted(location.getLocationName(),false);
			if(oldLocation == null) {
				return repo.save(location);
			}else if(oldLocation.isDeleted()) {
				oldLocation.setDeleted(false);
				return repo.save(oldLocation);
			}
		}
		
		return null;
	}
	
	
	@Override
	public int locationDelete(int id) {
		return repo.locationDelete(id);
	}

	@Override
	public Location update(Location location) {
		
		
		
		Location oldLoc = repo.findByLocationNameAndDeleted(location.getLocationName(),false);
		
		if(oldLoc != null && location.getLocationName().equals(oldLoc.getLocationName())) {
			return null;
		}
		if(oldLoc !=null && !location.getLocationName()
				.equalsIgnoreCase(oldLoc.getLocationName()))
			return null;
		
		
		Location loc = repo.findByLocationIDAndDeleted(location.getLocationID(),false);
		
		if(loc != null) {
			loc.setLocationName(location.getLocationName());
			return repo.save(loc);
		}else {
			return null;
		}
	}
	

	
	/*@Override
	public Location deleteLocation(Location location) {
		
		Location oldLocation = null;
		if(location.getLocationName() != null) {
			oldLocation = repo.findByLocationName(location.getLocationName());
			if(oldLocation == null)
				return repo.save(location);
		}
		
		return null;
	}*/

}
