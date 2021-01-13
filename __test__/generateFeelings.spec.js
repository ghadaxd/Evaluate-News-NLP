import { generateFeelings } from "../src/client/js/feelingsGenerator";

describe("Testing generateFeelings functionality", () => {
  test("The function is defined", () => {
    expect(generateFeelings).toBeDefined();
  });

  test("The function show error message when it receives no data", () => {
    // Set up our document body
    document.body.innerHTML =
      "<section id='results'>" +
      "<h2 id='results-title'>Your feelings is</h2>" +
      "<h4 id='feelings-title'></h4>" +
      "<blockquote id='feelings-quote'></blockquote>" +
      "<p id='error-msg'></p>" +
      "</section>";

    const input = [];
    generateFeelings(input);

    const errorMSG = document.getElementById("error-msg");
    expect(errorMSG.style.display).toEqual("block");
    expect(errorMSG.textContent).toEqual("No feelings has been identified.");
  });

  test("The function show the feelings result when receiving correct feelings data", () => {
    // Set up our document body
    document.body.innerHTML =
      "<section id='results'>" +
      "<h2 id='results-title'>Your feelings is</h2>" +
      "<h4 id='feelings-title'></h4>" +
      "<blockquote id='feelings-quote'></blockquote>" +
      "<p id='error-msg'></p>" +
      "</section>";
    // Set up test data
    const input = [
      {
        form: "Happy",
        id: "5fe8e21d3affc",
        type: "Top>Person>Feelings>Happiness",
        score_tag: "NONE",
      },
    ];

    generateFeelings(input);

    const resultsTitle = document.getElementById("results-title");
    const feelingsTitle = document.getElementById("feelings-title");
    const feelingQuote = document.getElementById("feelings-quote");

    expect(resultsTitle.style.display).toEqual("block");
    expect(feelingsTitle.style.display).toEqual("block");
    expect(feelingQuote.style.display).toEqual("block");

    expect(feelingsTitle.textContent).toEqual("Happiness ☀️");
    expect(feelingQuote.textContent).toEqual("Happiness is the best makeup.");
  });
});
