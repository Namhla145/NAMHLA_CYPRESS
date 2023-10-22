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
    cy.visit("https://uat.rici.co.za/");
    cy.get('input[name="emailAddress"]').type(
      "namhla.maninjwa+testing@sovtech.com"
    ); // Replace with your username
    cy.get('input[name="password"]').type("Indie77489656@");
    cy.get(".css-3rvhel").click();
    cy.wait(5000);
    //Add assertions or further actions after successful login

    // {
    //cacheAcrossSpecs: true,
  });
});
