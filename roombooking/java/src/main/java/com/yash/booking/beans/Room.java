package com.yash.booking.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Room {

	@Id
	@GeneratedValue
	private int roomID;

	@Column
	private String roomName;
	private int seats;
	private boolean roomStatus;
	// Need to resolve as boolean in Database
	private boolean deleted;
	
	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "locationID")
	private Location location;

	public int getRoomID() {
		return roomID;
	}

	public void setRoomID(int roomID) {
		this.roomID = roomID;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	public boolean isRoomStatus() {
		return roomStatus;
	}

	public void setRoomStatus(boolean roomStatus) {
		this.roomStatus = roomStatus;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Room [roomID=" + roomID + ", roomName=" + roomName + ", seats=" + seats + ", roomStatus=" + roomStatus
				+ ", deleted=" + deleted + ", location=" + location + "]";
	}


}
