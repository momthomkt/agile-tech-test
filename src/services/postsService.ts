import api from "./axiosInstance";

import URL_API_CONST from "../constants/URL_API_const"

export type getPostParam = {
  page?: number,
  title?: string,
  tag?: string,
}


class postsService {
  getAllTag() {
    return api.get(URL_API_CONST.POST.GET_ALL_TAGS);
  }
  getPost(postParam: getPostParam) {
    // const params: getPostParam = {};

    return api.get(URL_API_CONST.POST.GET, {
      params: postParam
    })
  }
}

export default new postsService();
