package io.EazyDev.DABackEnd.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="friend_of_friends")
public class Friends {
	@Id
	private int id;
	private String userId;
	private String userName;
	private String userCity;
	private String friendId;
	private String friendName;
	private String friendCity;
	private String friendSuggestedId;
	private String friendSuggestedName;
	private String friendSuggestedCity;
	
	public Friends(int id, String userId, String userName, String userCity, String friendId, String friendName,
			String friendCity, String friendSuggestedId, String friendSuggestedName, String friendSuggestedCity) {
		super();
		this.id = id;
		this.userId = userId;
		this.userName = userName;
		this.userCity = userCity;
		this.friendId = friendId;
		this.friendName = friendName;
		this.friendCity = friendCity;
		this.friendSuggestedId = friendSuggestedId;
		this.friendSuggestedName = friendSuggestedName;
		this.friendSuggestedCity = friendSuggestedCity;
	}

	public Friends() {
		super();
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserCity() {
		return userCity;
	}

	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}

	public String getFriendsId() {
		return friendId;
	}

	public void setFriendId(String friendId) {
		this.friendId = friendId;
	}

	public String getFriendName() {
		return friendName;
	}

	public void setFriendName(String friendName) {
		this.friendName = friendName;
	}

	public String getFriendCity() {
		return friendCity;
	}

	public void setFriendCity(String friendCity) {
		this.friendCity = friendCity;
	}

	public String getFriendsSuggestedId() {
		return friendSuggestedId;
	}

	public void setFriendSuggestedId(String friendSuggestedId) {
		this.friendSuggestedId = friendSuggestedId;
	}

	public String getFriendSuggestedName() {
		return friendSuggestedName;
	}

	public void setFriendSuggestedName(String friendSuggestedName) {
		this.friendSuggestedName = friendSuggestedName;
	}

	public String getFriendSuggestedCity() {
		return friendSuggestedCity;
	}

	public void setFriendSuggestedCity(String friendSuggestedCity) {
		this.friendSuggestedCity = friendSuggestedCity;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((friendSuggestedCity == null) ? 0 : friendSuggestedCity.hashCode());
		result = prime * result + ((friendSuggestedName == null) ? 0 : friendSuggestedName.hashCode());
		result = prime * result + ((friendCity == null) ? 0 : friendCity.hashCode());
		result = prime * result + ((friendId == null) ? 0 : friendId.hashCode());
		result = prime * result + ((friendName == null) ? 0 : friendName.hashCode());
		result = prime * result + ((friendSuggestedId == null) ? 0 : friendSuggestedId.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
		result = prime * result + ((userCity == null) ? 0 : userCity.hashCode());
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Friends other = (Friends) obj;
		if (friendSuggestedCity == null) {
			if (other.friendSuggestedCity != null)
				return false;
		} else if (!friendSuggestedCity.equals(other.friendSuggestedCity))
			return false;
		if (friendSuggestedName == null) {
			if (other.friendSuggestedName != null)
				return false;
		} else if (!friendSuggestedName.equals(other.friendSuggestedName))
			return false;
		if (friendCity == null) {
			if (other.friendCity != null)
				return false;
		} else if (!friendCity.equals(other.friendCity))
			return false;
		if (friendId == null) {
			if (other.friendId != null)
				return false;
		} else if (!friendId.equals(other.friendId))
			return false;
		if (friendName == null) {
			if (other.friendName != null)
				return false;
		} else if (!friendName.equals(other.friendName))
			return false;
		if (friendSuggestedId == null) {
			if (other.friendSuggestedId != null)
				return false;
		} else if (!friendSuggestedId.equals(other.friendSuggestedId))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		if (userCity == null) {
			if (other.userCity != null)
				return false;
		} else if (!userCity.equals(other.userCity))
			return false;
		if (userName == null) {
			if (other.userName != null)
				return false;
		} else if (!userName.equals(other.userName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Friends [userId=" + userId + ", userName=" + userName + ", userCity=" + userCity + ", friendId=" + friendId
				+ ", friendName=" + friendName + ", friendCity=" + friendCity + ", friendSuggestedId="
				+ friendSuggestedId + ", friendSuggestedName=" + friendSuggestedName + ", friendSuggestedCity="
				+ friendSuggestedCity + "]";
	}
	
	
	

	
	

}
