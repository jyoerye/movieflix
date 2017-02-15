package movieflix.service;

import java.util.List;

import movieflix.entity.UserComments;

public interface UserCommentsService {
	
	public List<UserComments> findAll();
	public List<UserComments> findAllCommentsByMovieId(String movieId);

	public void setUserComments(String userName, String movieId, String userComments);
	
	

}
