package movieflix.service;

import java.util.List;

import movieflix.entity.Video;

public interface VideoService {

	public List<Video> findAll();

	public Video findOne(String id);

	public Video create(Video m);

	public Video update(String id, Video m);

	public void delete(String id);

	public void save(Video m);

	public List<Video> findTopRatedMovies();
	public List<Video> findTopRatedTVShows();

	public List<Video> findByType(String type);

	public List<Video> findByYear(int year);

	public List<Video> findByGenre(String genre);

	//public List<Video> findAllByOrderByimdbratingAsc();

	public List<Video> findAllByOrderByYearAsc();

	public List<Video> findAllByOrderByVotesAsc();
	
	
	public List<Video> sortByAllVideosImdbRating();
	public List<Video> sortMoviesByImdbRating();
	public List<Video> sortSeriesByImdbRating();

}
