package movieflix.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserRatingId implements Serializable {

	private static final long serialVersionUID = 1L;

	public UserRatingId() {

	}

	@Column
	private String movieId;
	@Column
	private String userId;

	public UserRatingId(String movieId, String userId) {
		this.movieId = movieId;
		this.userId = userId;
	}

	public String getMovieId() {
		return movieId;
	}

	public void setMovieId(String movieId) {
		this.movieId = movieId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
