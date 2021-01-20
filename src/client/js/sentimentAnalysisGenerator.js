function generateSentimentAnalysis(sentimentAnalysisData) {
  const errorMSG = document.getElementById("error-msg");
  errorMSG.style = "display: none";

  // No results identified
  if (sentimentAnalysisData === undefined) {
    errorMSG.style = "display: block";
    errorMSG.innerHTML = "No results could be found.";
  } else if (sentimentAnalysisData.status.code != 0) {
    errorMSG.style = "display: block";
    errorMSG.innerHTML = sentimentAnalysisData.status.msg;
  } else {
    //Getting circles
    const polarity = document.getElementById("polarity-circle");
    const agreement = document.getElementById("agreement-circle");
    const subjectivity = document.getElementById("subjectivity-circle");
    const confidence = document.getElementById("confidence-circle");
    const irony = document.getElementById("irony-circle");
    //Prepare params
    const polarityData = {
      "P+": "Strong Positive",
      P: "Positive",
      NEU: "Neutral",
      N: "Negative",
      "N+": "Strong Negative",
      NONE: "Without Sentiment",
    };
    const agreementText = sentimentAnalysisData.agreement;
    const subjectivityText = sentimentAnalysisData.subjectivity;
    const confidenceText = sentimentAnalysisData.confidence;
    const ironyText = sentimentAnalysisData.irony;

    //Show the results
    polarity.innerHTML = polarityData[sentimentAnalysisData.score_tag];
    agreement.innerHTML = agreementText
      .toLowerCase()
      .replace(agreementText.toLowerCase()[0], agreementText[0]);
    subjectivity.innerHTML = subjectivityText
      .toLowerCase()
      .replace(subjectivityText.toLowerCase()[0], subjectivityText[0]);
    confidence.innerHTML = confidenceText + "% Confident";
    irony.innerHTML = ironyText
      .toLowerCase()
      .replace(ironyText.toLowerCase()[0], ironyText[0]);

    // Restart the animation
    const sentiments = [polarity, agreement, subjectivity, confidence, irony];
    for (let index = 0; index < sentiments.length; index++) {
      const element = sentiments[index];
      element.classList.remove("circle");
      void element.offsetWidth;
      element.classList.add("circle");
    }
  }
}

export { generateSentimentAnalysis };
