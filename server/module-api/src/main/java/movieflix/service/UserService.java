package movieflix.service;

import java.util.List;
import movieflix.entity.User;

public interface UserService {

	public List<User> findAll();

	public User findOne(String id);

	public User create(User u);

	public User update(String id, User u);

	public void delete(String id);

	public void save(User u);

}
