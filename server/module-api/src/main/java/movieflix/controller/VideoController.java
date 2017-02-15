package movieflix.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import movieflix.entity.Video;
import movieflix.service.VideoService;


@CrossOrigin
@RestController
@RequestMapping(value = "videos")
public class VideoController {
	@Autowired
	VideoService service;

	@RequestMapping(method = RequestMethod.GET) // hf
	@PreAuthorize("hasRole('ROLE_USER')")
	public List<Video> findAll() {
		
		return service.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, value = "{id}") // works hf
	public Video findOne(@PathVariable("id") String videoId) {
		System.out.println("Entering VideoController.findOne...");
		Video result = service.findOne(videoId);
		System.out.println(result);
		return result;
	}

	@RequestMapping(method = RequestMethod.POST) // works hf
	public Video create(@RequestBody Video v) {
		return service.create(v);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "{id}") // works hf
	public Video update(@PathVariable("id") String id, @RequestBody Video v) {
		return service.update(id, v);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}") // hf
	public void delete(@PathVariable("id") String id) {

		service.delete(id);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/movies/top-rated/") // hf
	public List<Video> findTopRatedMovies() {

		return service.findTopRatedMovies();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/series/top-rated/") // hf
	public List<Video> findTopRatedTVShows() {

		return service.findTopRatedTVShows();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/movies") // hf
	public List<Video> findMovies() {

		return service.findByType("movie");
	}

	@RequestMapping(method = RequestMethod.GET, value = "/series") // hf
	public List<Video> findTVShows() {

		return service.findByType("series");
	}

	@RequestMapping(method = RequestMethod.GET, value = "/year") // hf
	public List<Video> findByYear(@RequestParam("year") int year) {

		return service.findByYear(year);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/genre") // hf
	public List<Video> findByGenre(@RequestParam("genre") String genre) {

		return service.findByGenre(genre);
	}
	
	
	@RequestMapping(method = RequestMethod.GET, value = "/sort-by-imdb-rating") // hf
	public List<Video> sortByAllVideosImdbRating() {

		return service.sortByAllVideosImdbRating();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/movies/sort-by-imdb-rating") // hf
	public List<Video> sortMoviesImdbRating() {

		return service.sortMoviesByImdbRating();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/series/sort-by-imdb-rating") // hf
	public List<Video> sortSeriesImdbRating() {

		return service.sortSeriesByImdbRating();
	}

	public void setService(VideoService movieService) {
		this.service = movieService;

	}

}