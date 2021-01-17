package io.EazyDev.DABackEnd.controller;

import io.EazyDev.DABackEnd.models.Friends;
import io.EazyDev.DABackEnd.models.User;
import io.EazyDev.DABackEnd.services.FriendsService;
import io.EazyDev.DABackEnd.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("/")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {
    @Autowired
    UserService userService;
    
	
	@Autowired
	FriendsService friendsService;

    @GetMapping("users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
    
    
	@GetMapping("friends")
	public List<Friends> getAllFriends() {
		System.out.println("called the controller");
		return friendsService.getAllFriends();
	}
	

	@GetMapping("user")
	public List<Friends> getFriendsListByUserId(@RequestParam String id) {
		return friendsService.findById(id);
	}


}
