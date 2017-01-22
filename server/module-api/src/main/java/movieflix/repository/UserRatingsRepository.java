package movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import movieflix.entity.UserRatings;

public interface UserRatingsRepository extends JpaRepository<UserRatings, String>{
	
	List<UserRatings> findAll();
//	
//	@Query("select u from UserRatings u where u.userId = ?1 and u.movieId =?2")
//	UserRatings findRating(String userId,String movieId);
//	
//	 @Query("UPDATE UserRatings u SET u.rating = ?3 WHERE u.id = ?1 and u.movieId = ?2")
//	UserRatings updateRating(String userName,String movieId,int rating);
//	
	

}
