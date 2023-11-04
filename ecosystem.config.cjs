module.exports = {
  apps: [
    {
      name: "VerseFinderService",
      namespace: "verse-finder-server",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
