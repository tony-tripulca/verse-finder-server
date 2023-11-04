import { app } from "./Server.js";

import axios from "axios";
import URL from "./config/url.js";
import Logger from "./util/Logger.js";

import TalkController from "./controller/TalkController.js";

function AppRoutes() {
  app.get("/", (req, res) => {
    res.json({ service: process.env.APP_NAME });
  });

  app.get("/talk", (req, res) => {
    TalkController.search(req, res);
  });
}

AppRoutes();
