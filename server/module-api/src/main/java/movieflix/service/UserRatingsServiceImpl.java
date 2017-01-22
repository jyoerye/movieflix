package movieflix.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import movieflix.entity.Video;
import movieflix.entity.User;
import movieflix.entity.UserRatingId;
import movieflix.entity.UserRatings;
import movieflix.repository.VideoRepository;
import movieflix.repository.UserRatingsRepository;
import movieflix.repository.UserRepository;

@Service
public class UserRatingsServiceImpl implements UserRatingsService {
	@Autowired
	UserRatingsRepository repository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	VideoRepository videoRepository;

	@Override
	@Transactional(readOnly = true)
	public List<UserRatings> findAll() {
		return repository.findAll();
	}

	@Override
	@Transactional
	public void setUserRatings(String userName, String movieId, int rating) {
//		UserRatings existing = repository.findRating(userName, movieId);
//		if (existing != null) {
//			repository.updateRating(userName, movieId, rating);
//		}
		User u = userRepository.findByuserName(userName);
		Video m = videoRepository.findById(movieId);
		UserRatingId ratingId = new UserRatingId();
		ratingId.setUserId(u.getId());
		ratingId.setMovieId(m.getId());
		
		UserRatings userRating = new UserRatings(ratingId,(float)rating);
		repository.save(userRating);

	}

}
