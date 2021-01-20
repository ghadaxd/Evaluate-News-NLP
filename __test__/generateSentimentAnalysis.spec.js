import { generateSentimentAnalysis } from "../src/client/js/sentimentAnalysisGenerator";

describe("Testing generateSentimentAnalysis functionality", () => {
  test("The function is defined", () => {
    expect(generateSentimentAnalysis).toBeDefined();
  });

  test("The function show error message when it receives no data", () => {
    // Set up our document body
    document.body.innerHTML =
      "<section id='error-area'>" + "<p id='error-msg'></p>" + "</section>";

    const input = {
      status: {
        code: "212",
        msg: "No content to analyze",
        credits: "0",
        remaining_credits: "19992",
      },
    };
    generateSentimentAnalysis(input);

    const errorMSG = document.getElementById("error-msg");
    expect(errorMSG.style.display).toEqual("block");
    expect(errorMSG.textContent).toEqual("No content to analyze");
  });

  test("The function show the sentiment analysis result when receiving data", () => {
    // Set up our document body
    document.body.innerHTML =
      "<section id='sentiments'>" +
      "<div class='circle' id='polarity-circle'>Polarity</div>" +
      "<div class='circle' id='agreement-circle'>Agreement</div>" +
      "<div class='circle' id='subjectivity-circle'>Subjectivity</div>" +
      "<div class='circle' id='confidence-circle'>Confidence</div>" +
      "<div class='circle' id='irony-circle'>Irony</div>" +
      "</section>" +
      "<section id='error-area'>" +
      "<p id='error-msg'></p>" +
      "</section>";

    // Set up test data
    const input = {
      status: {
        code: "0",
        msg: "OK",
        credits: "1",
        remaining_credits: "19992",
      },
      model: "general_en",
      score_tag: "N+",
      agreement: "AGREEMENT",
      subjectivity: "OBJECTIVE",
      confidence: "100",
      irony: "NONIRONIC",
      sentence_list: [
        {
          text:
            "in the country of sokovia, the avengers tony stark, steve rogers, thor, bruce banner, natasha romanoff, and clint barto raid a hydra outpost led by wolfgang von strucker, who has been experimenting on humans using the scepter previously wielded by loki.",
          inip: "0",
          endp: "252",
          bop: "y",
          confidence: "100",
          score_tag: "N+",
          agreement: "AGREEMENT",
          segment_list: [Array],
          sentimented_entity_list: [Array],
          sentimented_concept_list: [Array],
        },
        {
          text:
            "they encounter two of strucker's experiments twins pietro, who has superhuman speed, and wanda maximoff, who can manipulate minds and project energy and apprehend strucker, while stark retrieves loki's scepter.",
          inip: "254",
          endp: "463",
          bop: "n",
          confidence: "100",
          score_tag: "N",
          agreement: "AGREEMENT",
          segment_list: [Array],
          sentimented_entity_list: [Array],
          sentimented_concept_list: [Array],
        },
      ],
      sentimented_entity_list: [
        {
          form: "Steve Rogers",
          id: "2418af20d6",
          type: "Top>Person>FullName",
          score_tag: "N+",
        },
        {
          form: "Thor",
          id: "5f8b6e87d6",
          type: "Top>Location>GeoPoliticalEntity",
          score_tag: "N+",
        },
        {
          form: "Thor",
          id: "8f9502a801",
          type: "Top>Person>FirstName",
          score_tag: "N+",
        },
        {
          form: "Wanda",
          id: "94068035c2",
          type: "Top>Person>FirstName",
          score_tag: "N",
        },
        {
          form: "Loki",
          id: "__14053569387950304116",
          type: "Top>Person>FullName",
          score_tag: "NONE",
        },
        {
          form: "wolfgang von strucker",
          id: "__12585987648197992735",
          type: "Top",
          score_tag: "NONE",
        },
        {
          form: "bruce",
          id: "__14134705653708230412",
          type: "Top>Person",
          score_tag: "N+",
        },
        {
          form: "natasha romanoff",
          id: "__2943329252784894197",
          type: "Top>Person>FullName",
          score_tag: "N+",
        },
        {
          form: "pietro",
          id: "__7039473917532010571",
          type: "Top>Person",
          score_tag: "NONE",
        },
        {
          form: "Wanda",
          id: "ab5fe03fba",
          type: "Top>Location>GeoPoliticalEntity",
          score_tag: "N",
        },
        {
          form: "Clint",
          id: "ab7c4755cf",
          type: "Top>Person>FirstName",
          score_tag: "N+",
        },
        {
          form: "Strucker",
          id: "d2624f89ad",
          type: "Top>Person>LastName",
          score_tag: "NONE",
        },
      ],
      sentimented_concept_list: [
        {
          form: "twin",
          id: "0e35ad0409",
          type: "Top>Person",
          score_tag: "NONE",
        },
        {
          form: "country",
          id: "35229605d1",
          type: "Top>Location>GeoPoliticalEntity>Country",
          score_tag: "N+",
        },
        {
          form: "avenger",
          id: "65fdadcbff",
          type: "Top>Person",
          score_tag: "N+",
        },
        {
          form: "twin",
          id: "93f89a8a84",
          type: "Top>Person",
          score_tag: "NONE",
        },
        {
          form: "energy",
          id: "b606e89e91",
          type: "Top",
          score_tag: "NONE",
        },
        {
          form: "project",
          id: "bde52a085f",
          type: "Top",
          score_tag: "NONE",
        },
        {
          form: "speed",
          id: "e50498110e",
          type: "Top>Unit>SpeedUnit",
          score_tag: "NONE",
        },
      ],
    };

    generateSentimentAnalysis(input);

    //Getting circles
    const polarity = document.getElementById("polarity-circle");
    const agreement = document.getElementById("agreement-circle");
    const subjectivity = document.getElementById("subjectivity-circle");
    const confidence = document.getElementById("confidence-circle");
    const irony = document.getElementById("irony-circle");

    expect(polarity.textContent).toEqual("Strong Negative");
    expect(agreement.textContent).toEqual("Agreement");
    expect(subjectivity.textContent).toEqual("Objective");
    expect(confidence.textContent).toEqual("100% Confident");
    expect(irony.textContent).toEqual("Nonironic");
  });
});
