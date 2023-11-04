import axios from "axios";
import URL from "../config/url.js";
import Logger from "../util/Logger.js";

import EsvService from "../services/EsvService.js";

const TalkController = {
  search: (req, res) => {
    EsvService.search({
      q: req.query.q,
      page: req.query.page,
      "page-size": 100,
    })
      .then((response) => {
        Logger.out([response]);
        res.json(response.data);
      })
      .catch((error) => {
        Logger.error([error]);
        res.json(error.response.data);
      });
  },
};

export default TalkController;
