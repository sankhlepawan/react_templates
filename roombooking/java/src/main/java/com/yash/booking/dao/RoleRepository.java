package com.yash.booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yash.booking.beans.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	public Role findByRoleName(String roleName);

}
