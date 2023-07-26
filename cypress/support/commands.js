// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("https://dev.autopv.7secondsolar.com/");

    cy.get('input[name="email"]').type("namhlmaninjw@gmail.com"); // Replace with your username
    cy.get('input[name="password"]').type("Indie123@");
    cy.get(".css-b5leqj > .chakra-button").click();

    //Add assertions or further actions after successful login
    cy.url().should(
      "eq",
      "https://dev.autopv.7secondsolar.com/auth/new-project/step-1"
    );
    cy.get("p").should("be.visible");
    // {
    //cacheAcrossSpecs: true,
  });
});
