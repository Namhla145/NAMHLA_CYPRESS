// Code to be executed before each Cypress login function

it("cypress login Invalid email", () => {
  cy.visit("https://dev.autopv.7secondsolar.com/");
  cy.get('input[name="email"]').type("namhlmaninjw@gmai"); // Replace with your username
  cy.get('input[name="password"]').type("Indie12");
  //cy.get(".css-b5leqj > .chakra-button").click();
  cy.contains("Invalid email").should("be.visible");
});
it("allows user to login", {
  retries: {
    runMode: 1,
    openMode: 1,
  },
});
it("cypress login Invalid password", () => {
  cy.visit("https://dev.autopv.7secondsolar.com/");
  cy.get('input[name="email"]').type("namhlmaninjw@gmail.com"); // Replace with your username
  cy.get('input[name="password"]').type("Indie12");
  cy.get(".css-b5leqj > .chakra-button", { timeout: 10000 })
    .should("be.visible")
    .click();
  //cy.get(".css-b5leqj > .chakra-button").click();
  cy.contains("Incorrect username or password.").should("be.visible");
});
