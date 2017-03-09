package movieflix.service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import movieflix.entity.User;
import movieflix.entity.UserComments;

public interface UserService {

	public List<User> findAll();

	public User findOne(String id);

	public User create(User u);

	public User update(String id, User u);

	public void delete(String id);

	public void save(User u);

	public String logIn(String username, String password) throws IllegalArgumentException, UnsupportedEncodingException;
}
