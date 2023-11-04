class URL {
  static esvApi() {
    let env = process.env.APP_ENV;

    if (env === "dev") {
      return "https://api.esv.org/v3";
    } else if (env === "uat") {
      return "https://api.esv.org/v3";
    } else if (env === "prod") {
      return "https://api.esv.org/v3";
    }

    return "https://api.esv.org/v3";
  }
}

export default URL;
