import api from "./axiosInstance";

import URL_API_CONST from "../constants/URL_API_const"

export type getPostParam = {
  page?: number,
  title?: string,
  tags?: string,
}

export type postCreateType = {
  title: string,
  description: string,
  tags: string[]
}

class postsService {
  getAllTag() {
    return api.get(URL_API_CONST.POST.GET_ALL_TAGS);
  }
  getPost(postParam: getPostParam) {
    return api.get(URL_API_CONST.POST.POST, {
      params: postParam
    })
  }
  create(postParam: postCreateType) {
    return api.post(URL_API_CONST.POST.POST, postParam)
  }

  update(postId: string, postParam: postCreateType) {
    return api.patch(`${URL_API_CONST.POST.POST}/${postId}`, postParam)
  }

  delete(postId: string) {
    return api.delete(`${URL_API_CONST.POST.POST}/${postId}`)
  }
}

export default new postsService();
