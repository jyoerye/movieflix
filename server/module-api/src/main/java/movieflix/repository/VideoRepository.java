package movieflix.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import movieflix.entity.Video;

public interface VideoRepository extends JpaRepository<Video, String> {
	List<Video> findAll();

	@Query("select v from Video v where v.type = 'movie' order by v.imdbRating desc")
	List<Video> findTopRatedMovies();
	
	@Query("select v from Video v where v.type = 'series' order by v.imdbRating desc")
	List<Video> findTopRatedTVShows();

	Video findById(String movieId);

	
	List<Video> findByType(String type);

	 
	List<Video> findByYear(int year);

	//@Query("select v from Video v where v.genre LIKE ?1")
	List<Video> findByGenreIgnoreCaseContaining(String genre);
	

	List<Video> findAllByOrderByImdbRatingDesc();

	List<Video> findByTypeOrderByImdbRatingDesc(String type);

}
