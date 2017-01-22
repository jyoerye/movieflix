//package movieflix.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import movieflix.entity.Movie;
//import movieflix.entity.User;
//import movieflix.entity.UserComments;
//import movieflix.repository.UserCommentsRepository;
//
//@Service
//public class UserCommentsServiceImpl implements UserCommentsService {
//
//	@Autowired
//	UserCommentsRepository repository;
//	
//	@Override
//	@Transactional(readOnly = true)
//	public List<UserComments> findAll(Movie m, User u) {
//		return repository.findAll();
//	}
//
//}
