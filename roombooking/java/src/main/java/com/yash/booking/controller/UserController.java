package com.yash.booking.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.yash.booking.beans.User;
import com.yash.booking.security.AuthToken;
import com.yash.booking.service.UserService;
import com.yash.booking.service.impl.UserServiceImpl;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ChangeUserPassword;
import com.yash.booking.util.ResponseMessage;



/* Http status
 * 204 No Content 
 * 422 Unprocessable Entity 
 * 201 created
 * 200 OK
*/

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")

public class UserController {

	private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserService userService;

	@PostMapping("/addlocationadmin")
	public ResponseEntity<?> addLocationAdmin(@RequestBody User user) {
		ApiStatus<?> apiStatus = userService.addLocationAdmin(user);
		return (apiStatus != null) ? ResponseEntity.status(HttpStatus.CREATED).body(apiStatus)
				: ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(apiStatus);

	}
	
	
	@PostMapping("/addstaff")
	public ResponseEntity<?> addStaffByLocationAdmin(@RequestBody User user) {
		ApiStatus<?> apiStatus = userService.addStaffByLocationAdmin(user);
		return (apiStatus != null) ? ResponseEntity.status(HttpStatus.CREATED).body(apiStatus)
				: ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(apiStatus);

	}

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody User user) {
		logger.info("inside @class {} rest entry id: {}",this.getClass().getName(),user);

		ApiStatus<?> apiStatus = userService.signUp(user);
		
		return (apiStatus != null) ? ((apiStatus.getStatus().equals(ResponseMessage.SUCCESS_STATUS))?ResponseEntity.status(HttpStatus.OK).body(apiStatus)
				:ResponseEntity.status(HttpStatus.CREATED).body(apiStatus))
				: ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(apiStatus);

	}



	@GetMapping("/getuserbyroleid/{roleId}")
	public ResponseEntity<?> getUsers(@PathVariable("roleId") int roleID, @RequestParam(defaultValue="0" , name="page") int page
			, @RequestParam(defaultValue="0" , name="limit")  int limit) {	
		
		if( (page==0 && limit>=0 ) ||  (page>0 && limit!=0) ) {
		
		List<User> user = userService.findUserByRole(roleID,page,limit);
		
		return (user.isEmpty()) ? sendErrorResponse(HttpStatus.NO_CONTENT,ResponseMessage.USER_NOT_FOUND)
				: ResponseEntity.status(HttpStatus.OK).body(user);
		}

		else return  sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,ResponseMessage.INVALID_DATA);
	}


	@GetMapping("/getuserbyemail/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable("email") String email) {
		User user = userService.findUserByEmail(email);
		return (user == null) ? sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,ResponseMessage.USER_NOT_FOUND)
				: ResponseEntity.status(HttpStatus.OK).body(user);

	}

	@GetMapping("/getuserbyid/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int id) {
		User user = userService.findUserById(id);
		return (user == null) ? sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,ResponseMessage.USER_NOT_FOUND)
				: ResponseEntity.status(HttpStatus.OK).body(user);

	}
	
	@GetMapping("/enable/{id}/{enable}")
	public ResponseEntity<?> enable(@PathVariable("id") int id,@PathVariable("enable") boolean enable) {
			return (userService.enable(id,enable)) ?
					ResponseEntity.status(HttpStatus.OK)
					.body(new ApiStatus(ResponseMessage.SUCCESS_STATUS, ResponseMessage.USER_ENABLE_SUCCESS, null))

		:
		 sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,ResponseMessage.SOMETHING_WENT_WRONG);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> enable(@PathVariable("id") int id) {
		logger.info("inside @class {} rest entry id: {}",this.getClass().getName(),id);
		String msg = ResponseMessage.USER_DELETED_FAILED ;
		if(userService.delete(id))
		{
			msg = ResponseMessage.USER_DELETED_SUCCESS;
			return sendErrorResponse(HttpStatus.NO_CONTENT,msg);
		}else
		return sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,msg);
	}
	
	@PutMapping("/updatepassword")
	public ResponseEntity<?> updatePassword(@RequestBody ChangeUserPassword user) {
		boolean isPassworedUpdated = userService.changePassword(user);
		return (isPassworedUpdated) ? sendSuccessResponse(HttpStatus.OK,ResponseMessage.PASSWORD_CHANGE_SUCCESS)
				: sendErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY,ResponseMessage.WRONG_OLD_PASSWORD);

	}
	
	
	
	
	
	
	
	private ResponseEntity<?> sendSuccessResponse(HttpStatus httpStatus ,String message) {
		return ResponseEntity.status(httpStatus).body(new ApiStatus(ResponseMessage.SUCCESS_STATUS, message, null));
	}

	private ResponseEntity<?> sendErrorResponse(HttpStatus httpStatus ,String message) {
		return ResponseEntity.status(httpStatus).body(new ApiStatus(ResponseMessage.FAILED_STATUS, message, null));
	}

}
