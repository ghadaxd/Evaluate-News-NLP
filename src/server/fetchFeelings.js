const getFeelingsMeaning = (text) => {
  const axios = require("axios");

  return axios
    .get("https://api.meaningcloud.com/sentiment-2.1", {
      params: {
        key: process.env.API_KEY,
        lang: "en",
        txt: text,
        model: "general_en",
        of: "json",
        ud: "Feelings",
      },
    })
    .then((response) => {
      // in case of success (200)
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // in case of failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.statusText);
        return error.response.status + " (" + error.response.statusText + ")";
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
        return error.message;
      }
    });
};

module.exports = getFeelingsMeaning;
