package com.yash.booking.service;

import org.springframework.security.core.userdetails.UserDetailsService; 
import java.util.List;

import com.yash.booking.beans.User;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ChangeUserPassword;

public interface UserService  extends UserDetailsService {
	

	User findUserByEmail(String email);
	User findUserById(int  id);
	ApiStatus signUp(User user);
	ApiStatus addLocationAdmin(User user);
	ApiStatus addStaffByLocationAdmin(User user);
	boolean enable(int id, boolean enable);
	public boolean delete(int id);
	boolean changePassword(ChangeUserPassword user);
	List<User> findUserByRole(int roleID, int page, int limit);
	
}
