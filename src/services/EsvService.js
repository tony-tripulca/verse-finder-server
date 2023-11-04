import axios from "axios";
import URL from "../config/url.js";

const EsvService = {
  search: (payload) => {
    return axios({
      method: "GET",
      baseURL: URL.esvApi(),
      url: "/passage/search",
      headers: {
        Authorization: `Token ${process.env.APP_ESV_TOKEN}`,
      },
      params: payload,
    });
  },
};

export default EsvService;
