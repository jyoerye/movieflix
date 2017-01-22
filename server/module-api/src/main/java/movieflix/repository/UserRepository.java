package movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import movieflix.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

	List<User> findAll();
	
	User findByuserName(String userName);
	
	
}
