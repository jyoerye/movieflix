package movieflix.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class UserRatings {
	@EmbeddedId
	private UserRatingId userRatingId;
	private float userRating;

	public UserRatings() {

	}

	public UserRatings(UserRatingId userRatingId, float userRating) {
		this.userRatingId = userRatingId;
		this.userRating = userRating;
	}

	@ManyToOne
	@JoinColumn(name = "USERID", referencedColumnName = "ID", insertable = false, updatable = false)
	private User user;

	@ManyToOne
	@JoinColumn(name = "MOVIEID", referencedColumnName = "ID", insertable = false, updatable = false)
	private Video movie;

	public UserRatingId getUserRatingId() {
		return userRatingId;
	}

	public void setUserRatingId(UserRatingId userRatingId) {
		this.userRatingId = userRatingId;
	}

	public float getUserRating() {
		return userRating;
	}

	public void setUserRating(float userRating) {
		this.userRating = userRating;
	}

}
