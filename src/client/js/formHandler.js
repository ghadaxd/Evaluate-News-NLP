function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("feelings-input").value;
  // clean up the text
  formText = formText.trim().toLowerCase();
  //app.validateInput(formText);

  // console.log("::: Form Submitted :::");
  // fetch("http://localhost:8080/test")
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById("results").innerHTML = res.message;
  //   });
}

export { handleSubmit };
