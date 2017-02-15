package movieflix.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import movieflix.entity.User;
import movieflix.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "users")
public class UserController {
	@Autowired
	UserService service;

	@RequestMapping(method = RequestMethod.GET) // hf
	public List<User> findAll() {
		return service.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, value = "{id}") // works hf
	public User findOne(@PathVariable("id") String userId) {
		return service.findOne(userId);
	}

	@RequestMapping(method = RequestMethod.POST) // works hf
	public User create(@RequestBody User u) {
		return service.create(u);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "{id}") // works hf
	public User update(@PathVariable("id") String id, @RequestBody User u) {
		return service.update(id, u);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "{id}") // hf
	public void delete(@PathVariable("id") String id) {

		service.delete(id);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/login") // hf
	public String logIn(@RequestParam("userName") String userName,@RequestParam("password") String password) throws IllegalArgumentException, UnsupportedEncodingException {
		return service.logIn(userName,password);
	}
}