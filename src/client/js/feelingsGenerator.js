function generateFeelings(feelingsSet) {
  // No feelings identified
  const feelingsSetLen = feelingsSet.length;
  if (feelingsSetLen === 0) {
    document.getElementById("error-msg").innerHTML =
      "No feelings has been identified.";
  }

  let feelings = [
    {
      id: "sadness-title",
      type: "Top>Person>Feelings>Sadness",
      feelingTitle: "Sadness ☁️",
      quote: "yeaah",
      count: 0,
    },
    {
      id: "happiness-title",
      type: "Top>Person>Feelings>Happiness",
      feelingTitle: "Happiness ☀️",
      quote: "Viva La vida!",
      count: 0,
    },
    {
      id: "anger-title",
      type: "Top>Person>Feelings>Anger",
      feelingTitle: "Anger ⚡️",
      quote: "noo",
      count: 0,
    },
    {
      id: "fear-title",
      type: "Top>Person>Feelings>Fear",
      feelingTitle: "Fear ❗️",
      quote: "goo",
      count: 0,
    },
    {
      id: "disgust-title",
      type: "Top>Person>Feelings>Disgust",
      feelingTitle: "Disgust 🚫",
      quote: "aww",
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
  document.getElementById("results-title").style = "display: block";
  // -- Show feelings title
  const feelingsTitle = document.getElementById("feelings-title");
  feelingsTitle.id = feelings[0].id;
  feelingsTitle.innerHTML = feelings[0].feelingTitle;
  // -- Show the feeling quote
  const feelingQuote = document.getElementById("feelings-quote");
  feelingQuote.style = "display: block";
  feelingQuote.innerHTML = feelings[0].quote;
}

export { generateFeelings };
