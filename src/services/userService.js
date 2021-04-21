import http from "../httpClient";

class userService {
  pathSer = "user";

  getList() {
    return http.get(this.pathSer);
  }
}

export default new userService();
