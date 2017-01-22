package movieflix.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import movieflix.entity.Video;
import movieflix.repository.VideoRepository;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideoRepository repository;

	@Override
	@Transactional(readOnly = true)
	public List<Video> findAll() {

		return repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Video findOne(String id) {

		return repository.findOne(id);
	}

	@Override
	@Transactional
	public Video create(Video m) {

		return repository.save(m);
	}

	@Override
	@Transactional
	public Video update(String id, Video m) {
		Video existing = repository.findOne(id);
		if (existing == null) {
			throw new RuntimeException();
			// TODO create custome exception later
		}
		m.setId(id);
		return repository.save(m);

	}

	@Override
	@Transactional
	public void delete(String id) {
		repository.delete(id);

	}

	@Override
	@Transactional
	public void save(Video m) {
		repository.save(m);

	}

	@Override
	public List<Video> findTopRatedMovies() {
		// TODO Auto-generated method stub
		return repository.findTopRatedMovies();
	}

	@Override
	public List<Video> findTopRatedTVShows() {
		// TODO Auto-generated method stub
		return repository.findTopRatedTVShows();
	}

	@Override
	public List<Video> findByType(String type) {
		// TODO Auto-generated method stub
		return repository.findByType(type);
	}

	@Override
	public List<Video> findByYear(int year) {
		// TODO Auto-generated method stub
		return repository.findByYear(year);
	}

	@Override
	public List<Video> findByGenre(String genre) {
		// TODO Auto-generated method stub
		return repository.findByGenreIgnoreCaseContaining(genre);
	}

	@Override
	public List<Video> findAllByOrderByimdbratingAsc() {
		// TODO Auto-generated method stub
		return repository.findAllByOrderByImdbRatingAsc();
	}

	@Override
	public List<Video> findAllByOrderByYearAsc() {
		// TODO Auto-generated method stub
		return repository.findAllByOrderByYearAsc();
	}

	@Override
	public List<Video> findAllByOrderByVotesAsc() {
		// TODO Auto-generated method stub
		return repository.findAllByOrderByImdbVotesAsc();
	}

}
