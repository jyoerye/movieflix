package movieflix.entity;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class UserComments {
	
	@Id
	private String id;
	@ManyToOne
	private Video Video;
	@ManyToOne
	private User user;
	private String userComments;
	
	public UserComments() {
		this.id = UUID.randomUUID().toString();
	}
	
	public Video getVideo() {
		return Video;
	}
	public void setVideo(Video video) {
		this.Video = video;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getUserComments() {
		return userComments;
	}
	public void setUserComments(String userComments) {
		this.userComments = userComments;
	}

	public UserComments(Video video, User user, String userComments) {
		this.id = UUID.randomUUID().toString();
		Video = video;
		this.user = user;
		this.userComments = userComments;
	}
	
	
	
	

}
