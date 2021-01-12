function generateFeelings(feelingsSet) {
  // Consts
  const resultsTitle = document.getElementById("results-title");
  const feelingsTitle = document.getElementById("feelings-title");
  const feelingQuote = document.getElementById("feelings-quote");
  const errorMSG = document.getElementById("error-msg");

  // Clear previous results
  resultsTitle.style = "display: none";
  feelingQuote.style = "display: none";
  feelingsTitle.style = "display: none";
  errorMSG.style = "display: none";

  // No feelings identified
  if (feelingsSet === undefined) {
    errorMSG.style = "display: block";
    errorMSG.innerHTML = "No feelings has been identified.";
  } else if (feelingsSet.length === 0) {
    errorMSG.style = "display: block";
    errorMSG.innerHTML = "No feelings has been identified.";
  } else {
    const feelingsSetLen = feelingsSet.length;

    let feelings = [
      {
        id: "happiness-title",
        type: "Top>Person>Feelings>Happiness",
        feelingTitle: "Happiness ☀️",
        quote: "Happiness is the best makeup.",
        cite:
          "https://www.goodhousekeeping.com/life/g22521771/happy-quotes/?slide=7",
        count: 0,
      },
      {
        id: "sadness-title",
        type: "Top>Person>Feelings>Sadness",
        feelingTitle: "Sadness ☁️",
        quote:
          "It’s in the darkest moments that we find our greatest strengths.",
        cite:
          "https://www.healthyplace.com/sites/default/files/2020-04/quotes-about-sadness-1.jpg",
        count: 0,
      },
      {
        id: "anger-title",
        type: "Top>Person>Feelings>Anger",
        feelingTitle: "Anger ⚡️",
        quote:
          "Be careful with your words, once they are said, they can be only forgiven not forgotten.",
        cite: "https://www.pinterest.com/pin/150378075034942001/",
        count: 0,
      },
      {
        id: "fear-title",
        type: "Top>Person>Feelings>Fear",
        feelingTitle: "Fear ❗️",
        quote:
          "Being brave isn't the absence of fear. Being brave is having that fear but finding a way through it.",
        cite: "https://ideapod.com/fear-quotes/",
        count: 0,
      },
      {
        id: "disgust-title",
        type: "Top>Person>Feelings>Disgust",
        feelingTitle: "Disgust 🚫",
        quote:
          "Disgust and resolve are two of the great emotions that lead to change.",
        cite:
          "https://quotefancy.com/quote/837882/Jim-Rohn-Disgust-and-resolve-are-two-of-the-great-emotions-that-lead-to-change",
        count: 0,
      },
    ];

    // Generate feelings
    for (let i = 0; i < feelingsSetLen; i++) {
      for (let index = 0; index < feelings.length; index++) {
        if (feelingsSet[i].type == feelings[index].type) {
          feelings[index].count++;
          continue;
        }
      }
    }

    // Sort feelings based on the number of occurrence
    feelings.sort((a, b) => {
      return b.count - a.count;
    });

    // Show the feelings name
    // -- Show title
    resultsTitle.style = "display: block";
    // -- Show feelings title
    feelingsTitle.style = "display: block";
    feelingsTitle.setAttribute("class", feelings[0].id);
    feelingsTitle.innerHTML = feelings[0].feelingTitle;
    // -- Show the feeling quote
    feelingQuote.style = "display: block";
    feelingQuote.innerHTML = feelings[0].quote;
    feelingQuote.setAttribute("cite", feelings[0].cite);
  }
}

export { generateFeelings };
