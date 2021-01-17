package io.EazyDev.DABackEnd.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import io.EazyDev.DABackEnd.models.Friends;

public interface FriendsRepo extends JpaRepository<Friends, String> {
	
	
	public List<Friends> findAll();
	
	
	public List<Friends> findByUserId(String id);

}
