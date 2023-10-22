// Loading the login page before each test
beforeEach(() => {
  cy.login("namhla.maninjwa+testing@sovtech.com", "Indie77489656@");
});
it("Log a Support Request ", () => {
  //Test case to Log a support request
  cy.get(".chakra-link css-1v1660y").click();

  cy.wait(5000);
});
