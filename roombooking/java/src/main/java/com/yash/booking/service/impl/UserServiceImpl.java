package com.yash.booking.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.yash.booking.beans.Location;
import com.yash.booking.beans.Role;
import com.yash.booking.beans.User;
import com.yash.booking.dao.LocationRepository;
import com.yash.booking.dao.RoleRepository;
import com.yash.booking.dao.UserRepository;
import com.yash.booking.service.UserService;
import com.yash.booking.util.ApiStatus;
import com.yash.booking.util.ChangeUserPassword;
import com.yash.booking.util.ResponseMessage;
import com.yash.booking.util.Util;

@Service("userService")
public class UserServiceImpl implements UserService {

	private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserRepository repo;

	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	LocationRepository locationRepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Value("${domain.name}")
	private String domain;
	
	final String className = this.getClass().getName();

	// createUser
	//remove multiple return
	@Override
	public ApiStatus addLocationAdmin(User user) {
		
		Location location = null;
		if(!user.getLocation().isEmpty()) {
			location = locationRepo.findById(user.getLocation().get(0).getLocationID()).orElse(null);
			if(location == null) {
				return failStatus(ResponseMessage.NO_LOCATION_FOUND);
			}
		}else {
			return failStatus(ResponseMessage.NO_LOCATION_FOUND);
		}
		
		if (repo.findByEmailAndDeleted(user.getEmail(),false) == null) {


				Role role = roleRepo.findByRoleName(ResponseMessage.LOCATION_ADMIN);
				
				
				List<Location> locations = new ArrayList<Location>();
				locations.add(location);
				user.setLocation(locations);
				
				if (role != null) {
					List<Role> roles = new ArrayList<Role>();
					roles.add(role);
					user.setRole(roles);
				} else {
					return failStatus(ResponseMessage.NO_ROLE_FOUND_MESSAGE);
				}
				
				String pwd = "P@ss_123";
//				String pwd = Util.generateNewRandomPassword();
				
				user.setPassword(bCryptPasswordEncoder.encode(pwd));
				User newUser = repo.save(user);
				// send email code here
				
				return new ApiStatus<User>(ResponseMessage.SUCCESS_STATUS,
						ResponseMessage.USER_REGISTER_SUCCESS_MESSAGE, newUser);
			} else {
			// throw new UserAlreayExistEx 
			return failStatus(ResponseMessage.EMAIL_ALREADY_EXIST_ERROR);

		}
	}
	
	
	@Override
	public ApiStatus addStaffByLocationAdmin(User user) {
		
		if (repo.findByEmailAndDeleted(user.getEmail(),false) == null) {

	
				
				Location location = locationRepo.findByLocationIDAndDeleted(user.getLocation().get(0).getLocationID(),false);
				if(location!=null) {
					
					List<Location> locations = new ArrayList<>();
					locations.add(location);
					user.setLocation(locations);
				
				
				Role role = roleRepo.findByRoleName(ResponseMessage.STAFF);
				
				if (role != null) {
					List<Role> roles = new ArrayList<Role>();
					roles.add(role);
					user.setRole(roles);
					
				} else {
					return failStatus(ResponseMessage.NO_ROLE_FOUND_MESSAGE);
				}
				
				String pwd = "P@ss_123";
//				String pwd = Util.generateNewRandomPassword();
				user.setPassword(bCryptPasswordEncoder.encode(pwd));
				User newUser = repo.save(user);
				// send email code here
				
				return new ApiStatus<User>(ResponseMessage.SUCCESS_STATUS,
						ResponseMessage.USER_REGISTER_SUCCESS_MESSAGE, newUser);
				}else {
					return failStatus(ResponseMessage.NO_LOCATION_FOUND);
				}
			} else {
			// throw new UserAlreayExistEx 
			return failStatus(ResponseMessage.EMAIL_ALREADY_EXIST_ERROR);

		}
	}
	
	

	private ApiStatus<?> failStatus(String message) {
		return new ApiStatus<User>(ResponseMessage.FAILED_STATUS, message, null);
	}



	@Override
	public List<User> findUserByRole(int roleID , int page , int limit) {
		return	(page==0 && limit==0) ? repo.findByRoleRoleIdAndDeleted(roleID ,false ,null):
	 repo.findByRoleRoleIdAndDeleted(roleID ,false ,PageRequest.of(page, limit));
                                                            
	}

	
	@Override
	public User findUserByEmail(String email) {
		return repo.findByEmailAndDeleted(email,false);

	}

	//choose method method apporpriate
	@Override
	public ApiStatus signUp(User user) {

		if (isDomainValid(user.getEmail())) {
			if (repo.findByEmailAndDeleted(user.getEmail(),false) == null) {
				//remove hard value	
				
				Location location = locationRepo.findByLocationNameAndDeleted(user.getLocation().get(0).getLocationName(), false);
				if(location!=null) {
					
					List<Location> locations = new ArrayList<>();
					locations.add(location);
					user.setLocation(locations);
							
				Role role = roleRepo.findByRoleName(ResponseMessage.STAFF);

				if (role != null) {
					List<Role> roles = new ArrayList<Role>();
					roles.add(role);
					user.setRole(roles);
				} else {
					return failStatus(ResponseMessage.NO_ROLE_FOUND_MESSAGE);
				}		
				user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
				user.setDeleted(false);
				user.setEnabled(false);
			
				//activation mail
				
				repo.save(user);
				return new ApiStatus<User>(ResponseMessage.SUCCESS_STATUS,
						ResponseMessage.USER_REGISTER_SUCCESS_MESSAGE, null);
				}
				else {
					return failStatus(ResponseMessage.NO_LOCATION_FOUND);
				}

			} else {
				return failStatus(ResponseMessage.EMAIL_ALREADY_EXIST_ERROR);

			}
			
		} else
			return failStatus(ResponseMessage.EMAIL_DOMAIN_ERROR);

	}
	
	
	public boolean enable(int userId,boolean enable) {
		logger.info("inside @class {} entry...",className);
		boolean status = false;
		User user = repo.findByUserIdAndDeleted(userId,false);
		if(user !=null) {
		    user.setEnabled(enable);
		    repo.save(user);
		    status=true;
		}
		return status;
	}
	
	public boolean delete(int userId) {
		logger.info("inside @class {} entry... @method delete",className);
		boolean status = false;
		try {
		User user = repo.findByUserIdAndDeleted(userId,false);
		if(user !=null) {
		    user.setDeleted(true);
		    repo.save(user);
		    status=true;
		}
		}catch (Exception e) {
			logger.error("error inside @class {} @method delete {} ",className,e.getLocalizedMessage());
		}
		return status;
	}

	private boolean isDomainValid(String email) {
		String str = email.split("@")[1];
		return str.equals(domain);
	}

	@Override
	public User findUserById(int id) {
		//change it to employee(for now)
//		return repo.findById(id).orElse(null);
		return repo.findByUserIdAndDeleted(id,false);
	}


	@Override
	public boolean changePassword(ChangeUserPassword user) {
		try {
			User oldUser = repo.findByUserIdAndDeleted(user.getId(),false);
				if(oldUser!=null && bCryptPasswordEncoder.matches(user.getOldPassword(), oldUser.getPassword())) {
				oldUser.setPassword(bCryptPasswordEncoder.encode(user.getNewPassword()));
				repo.save(oldUser);
				return true;
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			logger.error("error inside @class {} @method changepassword {} ",className,e.getMessage());
		}
		return false;
	}


	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User storedUserEntity = repo.findByEmailAndDeleted(email,false);
		if (storedUserEntity == null) {
			throw new UsernameNotFoundException(email);
		}
		
		// Spring provided User class out of box to hold User details when sign-in.
		return new org.springframework.security.core.userdetails.User(storedUserEntity.getEmail(),
				storedUserEntity.getPassword(), getAuthority(storedUserEntity));
	}

	private Set<SimpleGrantedAuthority> getAuthority(User user) {
		Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		user.getRole().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getRoleName()));
		});
		return authorities;

	}

}
