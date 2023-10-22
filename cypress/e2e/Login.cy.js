// Code to be executed before each Cypress login function

it("cypress login Invalid email", () => {
  cy.visit("https://uat.rici.co.za/");
  cy.get('input[name="emailAddress"]').type("namhla.maninjwa+testing@sovtech"); // username
  cy.get('input[name="password"]').type("Indie77489656@");
  //cy.get(".css-3rvhel").click();
  cy.contains("Email address is invalid.").should("be.visible");
});
it("allows user to login", {
  retries: {
    runMode: 1,
    openMode: 1,
  },
});
it("cypress login Invalid password", () => {
  cy.visit("https://uat.rici.co.za/");
  cy.get('input[name="emailAddress"]').type(
    "namhla.maninjwa+testing@sovtech.com"
  ); // Replace with your username
  cy.get('input[name="password"]').type("Indie7748965");
  cy.get(".css-3rvhel").click();
  //cy.get(".css-b5leqj > .chakra-button", { timeout: 10000 }).should("be.visible")

  //cy.get(".css-b5leqj > .chakra-button").click();
  cy.contains("Invalid email address or password.").should("be.visible");
});
it("cypress login using valid credentials", () => {
  cy.visit("https://uat.rici.co.za/");
  cy.get('input[name="emailAddress"]').type(
    "namhla.maninjwa+testing@sovtech.com"
  ); // Replace with your username
  cy.get('input[name="password"]').type("Indie77489656@");
  cy.get(".css-3rvhel").click();
  //cy.get(".css-b5leqj > .chakra-button", { timeout: 10000 }).should("be.visible")

  //cy.get(".css-b5leqj > .chakra-button").click();
});
