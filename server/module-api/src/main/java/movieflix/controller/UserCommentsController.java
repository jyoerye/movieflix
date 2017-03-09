package movieflix.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import movieflix.service.UserCommentsService;
import movieflix.entity.*;


@RestController
@RequestMapping(value = "user-comments")
@CrossOrigin("http://localhost:4200")
public class UserCommentsController {

	@Autowired
	UserCommentsService service;
	
	@RequestMapping(method = RequestMethod.GET)  //hf
	public List<UserComments> findAll() {
		return service.findAll();
	}
	
	@RequestMapping(method = RequestMethod.GET , value = "/get-comments-by-movieid")  //hf
	public List<UserComments> findAllCommentsByMovieId(@RequestParam("videoId") String videoId) {
		return service.findAllCommentsByMovieId(videoId);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public void setUserComments(@RequestParam("userName") String userName, @RequestParam("movieId") String movieId,
			@RequestParam("comments") String comments) {
		System.out.println("Jyo in user comments");
		service.setUserComments(userName, movieId, comments);
	}
}
