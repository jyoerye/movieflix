package movieflix.service;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

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

	@Override
	public String logIn(String username, String password)
			throws IllegalArgumentException, UnsupportedEncodingException {
		User u = repository.findByuserNameAndPassword(username, password);
		String[] roles;
		
		System.out.println(u);
		if (u != null) {
			if(u.isAdmin())
			{
				roles= new String[2];
				roles[0]="ROLE_USER";
				roles[1]="ROLE_ADMIN";
			}
			else
			{
				roles= new String[1];
				roles[0]="ROLE_USER";
			}
			String token = "";
			try {
				token = JWT.create().withIssuer("MOVIEFLIX")
						.withClaim("username", username)
						.withClaim("id", u.getId())
						.withArrayClaim("role",roles)
						.sign(Algorithm.HMAC256("secret"));
				System.out.println("token "+token);
			} catch (JWTCreationException exception) {
				// Invalid Signing configuration / Couldn't convert Claims.
			}
			return token;
		} else {
			throw new RuntimeException("User not authenticated");
		}

	}
}
