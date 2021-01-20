function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("article-input").value;
  // clean up the text
  formText = formText.trim().toLowerCase();
  const pattern = /([\/\\0-9()!@#%^&*?><":|~_-])+/;
  const checkFlag = pattern.test(formText);

  if (checkFlag) {
    //found error, then show an error msg
    const errorMSG = document.getElementById("error-msg");
    errorMSG.style = "display: block";
    errorMSG.innerHTML =
      "Use words only without numbers or any special character.";
  } else {
    // Fetch api
    const axios = require("axios");
    axios
      .get("http://localhost:8080/sentiments?txt=" + formText)
      .then((response) => {
        // in case of success (200)
        app.generateSentimentAnalysis(response.data);
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
}

export { handleSubmit };
