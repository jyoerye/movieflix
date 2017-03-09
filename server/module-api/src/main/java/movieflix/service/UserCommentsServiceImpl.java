package movieflix.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import movieflix.entity.User;
import movieflix.entity.UserComments;
import movieflix.entity.Video;
import movieflix.repository.UserCommentsRepository;
import movieflix.repository.UserRepository;
import movieflix.repository.VideoRepository;

@Service
public class UserCommentsServiceImpl implements UserCommentsService {

	@Autowired
	UserCommentsRepository repository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	VideoRepository videoRepository;
	
	@Override
	@Transactional(readOnly = true)
	public List<UserComments> findAll() {
		return repository.findAll();
	}
	
	@Override
	public List<UserComments> findAllCommentsByMovieId(String videoId) {
		
		return repository.findByVideoId(videoId);
	}

	@Override
	public void setUserComments(String userName, String movieId, String comments) {
		User u = userRepository.findByuserName(userName);
		Video v = videoRepository.findById(movieId);	
		System.out.println("user "+ u.getId() + "movieid " +v.getId()  );
		
		UserComments userComments= new UserComments(v, u, comments);
		repository.save(userComments);		
	}

	

}
