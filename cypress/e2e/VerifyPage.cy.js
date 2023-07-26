//descibing suite and function
beforeEach(() => {
  cy.login("namhlmaninjwa@gmail.com", "Indie123@");
});
describe("Verify page", () => {
  cy.visit("/");
  it("verify title-positive", () => {
    //Test case to verify page
    cy.visit("/");
    cy.title().should("eq", "7secondsolar");
  });
  it("verify title-Negative", () => {
    //Test case to verify page
    cy.visit("/");
    cy.title().should("eq", "7secondsol");
  });
});
