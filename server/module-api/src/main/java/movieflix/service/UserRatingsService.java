package movieflix.service;

import java.util.List;

import movieflix.entity.UserRatings;

public interface UserRatingsService {

	public List<UserRatings> findAll();

	public void setUserRatings(String userName, String movieId, int rating);
	
	public UserRatings  findUserRatingsByUserName(String userName, String movieId);

}
