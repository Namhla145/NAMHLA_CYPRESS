// Loading the login page before each test
beforeEach(() => {
  cy.login("namhla.maninjwa+testing@sovtech.com", "Indie77489656@");
});
it("Click the clients table ", () => {
  //Test case to verify page
  cy.visit("https://uat.rici.co.za/auth/clients");
  //cy.wait(5000);
  it("should have the expected columns", () => {
    // Verify the presence of each column header
    cy.get("table")
      .find("thead th")
      .should("have.length", 6) // Make sure there are 6 columns
      .should("contain", "Client")
      .should("contain", "Terms")
      .should("contain", "Balance Receivable")
      .should("contain", "Invoice Queries")
      .should("contain", "Acc Issues")
      .should("contain", "RTG Primary Contact");
  });
});
it("Click the Invoice table ", () => {
  //Test case to verify page
  cy.visit("https://uat.rici.co.za/auth/invoices");
  cy.wait(5000);
});
it("Click the users table ", () => {
  //Test case to verify page
  cy.visit("https://uat.rici.co.za/auth/users");
  cy.wait(5000);
});
it("Click the queries table ", () => {
  //Test case to verify page
  cy.visit("https://uat.rici.co.za/auth/queries");
  cy.wait(5000);
  t("Click the support table ", () => {
    //Test case to verify page
    cy.visit("https://uat.rici.co.za/auth/support");
    cy.wait(5000);
  });
});
