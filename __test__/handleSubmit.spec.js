import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing form submission", () => {
  test("The function is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
