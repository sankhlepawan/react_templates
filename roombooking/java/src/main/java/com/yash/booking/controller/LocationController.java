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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yash.booking.beans.Location;
import com.yash.booking.service.LocationService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ResponseMessage;


/* Http status
 * 204 No Content 
 * 422 Unprocessable Entity 
 * 201 created
 * 200 OK
*/

	

@RestController
@RequestMapping("/api/location")
@CrossOrigin("*")
public class LocationController {

	@Autowired
	private LocationService service;
	
	
	@GetMapping("/")
	public ResponseEntity<?>  findAll( @RequestParam(defaultValue="0" , name="page") int page
			, @RequestParam(defaultValue="0" , name="limit")  int limit) {
	
		if( (page==0 && limit>=0 ) ||  (page>0 && limit!=0) ) {
		
			List<Location> list = service.findAll(page,limit);
			return (list.isEmpty()) ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(list)
								: ResponseEntity.status(HttpStatus.OK).body(list);
		}

		else return  ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).
					body(new ApiStatus(ResponseMessage.FAILED_STATUS, ResponseMessage.INVALID_DATA, null));


	}
	
	@PostMapping("/add")
	public ResponseEntity<ApiStatus<?>> add(@RequestBody Location location) {

		Location userLocation =  service.addLocation(location);

		return (userLocation != null) ? ResponseEntity.status(HttpStatus.CREATED)
				.body(new ApiStatus(ResponseMessage.SUCCESS_STATUS, ResponseMessage.LOCATION_ADD_SUCCESS, userLocation)):
			ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
			.body(new ApiStatus(ResponseMessage.FAILED_STATUS, ResponseMessage.LOCATION_ALREADY_EXIST, null));
		 
	}
	
	
	
	@PutMapping("/update")
	public ResponseEntity<ApiStatus<?>> update(@RequestBody Location location) {
		Location userLocation =  service.update(location);
	
		
		return (userLocation != null) ?
				ResponseEntity.status(HttpStatus.OK)
				.body(new ApiStatus(ResponseMessage.SUCCESS_STATUS,
						ResponseMessage.LOCATION_UPDATE_SUCCESS,
								userLocation))
				:
			ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
			.body(new ApiStatus(ResponseMessage.FAILED_STATUS,
					ResponseMessage.LOCATION_ALREADY_EXIST, null));
		 
		
		
	}

	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApiStatus<?>> delete(@PathVariable("id") int id) {
		
		
		int status =  service.locationDelete(id);
	
		return (status==0 || status ==1) ?
				ResponseEntity.status(HttpStatus.NO_CONTENT)
				.body(new ApiStatus(ResponseMessage.SUCCESS_STATUS,
						ResponseMessage.LOCATION_DELETED,
						null))
				:
			ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
			.body(new ApiStatus(ResponseMessage.FAILED_STATUS,
					ResponseMessage.LOCATION_DELETED_FAILED, null));
		 
		

	}
	
	 
}
