module.exports = {
  configurations: {
    "chrome.laptop": {
      target: "chrome.docker",
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
  },
  diffingEngine: "looks-same",
  "looks-same": { tolerance: 2.3 },
};
