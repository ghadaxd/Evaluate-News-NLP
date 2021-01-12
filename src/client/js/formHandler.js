function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("feelings-input").value;
  // clean up the text
  formText = formText.trim().toLowerCase();

  // Fetch api
  const axios = require("axios");
  axios
    .get("http://localhost:8080/feelings?txt=" + formText)
    .then((response) => {
      // in case of success (200)
      app.generateFeelings(response.data);
    })
    .catch((error) => {
      // in case of failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        document.getElementById("error-msg").innerHTML =
          error.response.status + " (" + error.response.statusText + ")";
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        document.getElementById("error-msg").innerHTML = error.message;
      }
    });
}

export { handleSubmit };
