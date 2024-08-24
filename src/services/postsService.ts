import api from "./axiosInstance";

import URL_API_CONST from "../constants/URL_API_const"

class postsService {
  getAllTag() {
    return api.get(URL_API_CONST.POST.GET_ALL_TAGS);
  }
}

export default new postsService();
