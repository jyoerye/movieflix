package movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import movieflix.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

	List<User> findAll();
	
	User findByuserName(String userName);
	
	@Query("select u from User u where u.userName = ?1 and u.password=?2")
	public User findByuserNameAndPassword(String userName ,String password);
	
	User findById(String id);
	
}
