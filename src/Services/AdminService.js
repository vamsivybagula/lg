import axios from "axios";

const USER_API_BASE_URL = "http://localhost:9004/apiu/user";
const CONTRIBUTOR_API_BASE_URL = "http://localhost:9004/apic/contributor";
const ADMIN_API_BASE_URL = "http://localhost:9004/apia/admin";

class AdminService {

  validateLogin(admin) {
    return axios.post(ADMIN_API_BASE_URL + "/login", admin);
  }
  getCourses() {
    return axios.get(ADMIN_API_BASE_URL + "/courses/all");
  }
  getUsers(){
    return axios.get(ADMIN_API_BASE_URL+"/users/all");
  }

}

export default new AdminService();
