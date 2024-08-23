import apiClient from "../configs/api";

import URL_API_CONST from "../constants/URL_API_const"

class GalleriesService {
  getAll() {
    return apiClient.get(URL_API_CONST.GALLERIES)
  }
}

export default new GalleriesService();
