package movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import movieflix.entity.UserComments;


public interface UserCommentsRepository extends JpaRepository<UserComments, String>{
	
	List<UserComments> findAll();
	
	@Query("select u from UserComments u where u.Video.id = ?1")
	List<UserComments> findByVideoId(String videoId);

}
