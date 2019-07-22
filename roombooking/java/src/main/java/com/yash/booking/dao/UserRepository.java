package com.yash.booking.dao;

import java.util.List;import javax.jws.soap.SOAPBinding.Use;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yash.booking.beans.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	// @Query("select u from User u where u.deleted=0 and u.email=:email")
	public User findByEmailAndDeleted(String email,boolean deleted);
	
	
	public List<User> findByRoleRoleIdAndDeleted(Integer roleID, boolean deleted, Pageable pageable);
	
	//@Query("select u from User u where u.deleted=0 and userId=:id")
	public User findByUserIdAndDeleted(int id, boolean deleted);
	

//	@Query("select u from User u where u.deleted=0 ")
//	public List<User> findByDeleted(boolean deleted);
	


	
}
