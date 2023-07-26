// Code to be executed before each Cypress login function
beforeEach(() => {
  cy.login("namhlmaninjwa@gmail.com", "Indie123@");
});
describe("Enter Values on step1", () => {
  it("input data", () => {
    cy.wait(5000);
    cy.url().should(
      "eq",
      "https://dev.autopv.7secondsolar.com/auth/new-project/step-1"
    );

    cy.contains("Step 1").should("be.visible");
    cy.get("chakra-input css-14m35dl").type("New_Project");
    //cy.get("#field-:r3:").type("New");
    cy.get(".chakra-react-select__input-container").click();
    cy.get('input[name="description]').type("123");
    cy.get(".chakra-button").click();
  });
});
