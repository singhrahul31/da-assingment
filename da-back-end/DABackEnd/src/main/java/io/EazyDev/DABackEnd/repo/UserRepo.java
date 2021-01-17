package io.EazyDev.DABackEnd.repo;


import io.EazyDev.DABackEnd.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
}
