package movieflix.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import movieflix.entity.UserRatings;
import movieflix.service.UserRatingsService;

@RestController
@RequestMapping(value = "user-ratings")
@CrossOrigin("http://localhost:4200")
public class UserRatingsController {

	@Autowired
	UserRatingsService service;

	@RequestMapping(method = RequestMethod.GET) // hf
	public List<UserRatings> findAll() {
		 return service.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public void setUserRatings(@RequestParam("userName") String userName, @RequestParam("movieId") String movieId,
			@RequestParam("rating") int rating) {
		System.out.println("Jyo in user rating");
		service.setUserRatings(userName, movieId, rating);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-rating")
	public UserRatings findUserRatingByUserName(@RequestParam("userName") String userName, @RequestParam("movieId") String movieId) {
		 return service.findUserRatingsByUserName(userName, movieId);
	}

	
	

}
