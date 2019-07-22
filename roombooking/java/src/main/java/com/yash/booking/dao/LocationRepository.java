package com.yash.booking.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yash.booking.beans.Location;

@Transactional
public interface LocationRepository extends JpaRepository<Location, Integer> {

	@Query("select l from Location l where l.deleted=false")
	List<Location> findAll();
	

	public  List<Location> findByDeleted(boolean deleted , Pageable pageable);
	
	Location findByLocationNameAndDeleted(String location,boolean deleted);


	@Modifying(clearAutomatically = true)
	@Query("update Location l set l.deleted = 1 where l.locationID = :id")
	public int locationDelete(@Param("id") int id);
	
	Location findByLocationIDAndDeleted(int locationid,boolean deleted);
}
