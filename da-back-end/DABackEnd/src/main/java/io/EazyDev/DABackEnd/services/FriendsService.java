package io.EazyDev.DABackEnd.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.EazyDev.DABackEnd.models.Friends;
import io.EazyDev.DABackEnd.repo.FriendsRepo;

@Service
public class FriendsService {
	
	
	@Autowired
	FriendsRepo friendsRepo;

	public List<Friends> getAllFriends() {
		return friendsRepo.findAll();
	}
	
	
	public List<Friends> findById(String id) {

		return friendsRepo.findByUserId(id);
	}

}
