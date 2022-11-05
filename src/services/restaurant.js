import http from "../utils/http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`/restaurants?page=${page}`);
  }

  get(id) {
    return http.get(`/restaurants/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`/restaurants?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    console.log("🚀 ~ file: restaurant.js ~ line 17 ~ RestaurantDataService ~ createReview ~ data", data)
    return http.post("/reviews", data);
  }

  updateReview(data) {
    return http.put("/reviews", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/reviews?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }

}

export default new RestaurantDataService();