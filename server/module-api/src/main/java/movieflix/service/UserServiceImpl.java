package movieflix.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import movieflix.entity.User;
import movieflix.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public User findOne(String id) {
		// TODO Auto-generated method stub
		return repository.findOne(id);
	}

	@Override
	@Transactional
	public User create(User u) {
		return repository.save(u);
	}

	@Override
	@Transactional
	public User update(String id, User u) {
		// TODO Auto-generated method stub
		User existing = repository.findOne(id);
		if (existing == null) {
			throw new RuntimeException();
			// TODO create custome exception later
		}
		u.setId(id);
		return repository.save(u);

	}

	@Override
	@Transactional
	public void delete(String id) {
		repository.delete(id);

	}

	@Override
	@Transactional
	public void save(User u) {
		repository.save(u);

	}

}
