import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link, useParams, useLocation } from "react-router-dom";


export default function AddReview(props) {
  const { id } = useParams();
  const location = useLocation();
  console.log("🚀 ~ file: Add-review.js ~ line 9 ~ AddReview ~ location", location)
  let initialReviewState = "";
  let editing = false;
  let idDoReview = ""
  const data = location.state?.currentReview;
  console.log("🚀 ~ file: Add-review.js ~ line 14 ~ AddReview ~ idDoReview", idDoReview)
  
  if (data) {
    editing = true;
    initialReviewState = data.text;
    idDoReview = data._id;
  }
  
  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    setReview(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: id
    };

    if (editing) {
      data.review_id = idDoReview
      RestaurantDataService.updateReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      console.log('passa aqui?')
      RestaurantDataService.createReview(data)
        .then(response => {
          setSubmitted(true);
        })
        .catch(e => {
          console.log(e);
        });
    }

  };

  return (
    <div>
      {props.user.name ? (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <Link to={"/restaurants/" + id} className="btn btn-success">
                Back to Restaurant
              </Link>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="description">{editing ? "Edit" : "Create"} Review</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={review}
                  onChange={handleInputChange}
                  name="text"
                />
              </div><button onClick={saveReview} className="btn btn-success">Submit</button></div>)}</div>)
        :
        (<div>Please log in.</div>)}
    </div>
  );
}

