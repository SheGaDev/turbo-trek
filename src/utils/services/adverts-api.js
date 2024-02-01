import { instanse } from "./instance";

class AdvertsService {
  constructor() {
    this.params = {
      limit: 12,
      page: 1,
    };
  }

  /**
   *
   * @param {number} page
   * @returns {Promice<Adverts>}
   */
  async fetchAdverts(page = 1) {
    this.params.page = page;
    const response = await instanse.get("adverts", { params: this.params });
    console.log(response);
    return response.data;
  }
}

export const AdvertsAPI = new AdvertsService();
