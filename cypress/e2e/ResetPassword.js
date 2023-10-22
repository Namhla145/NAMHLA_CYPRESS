describe("Sign-Up Functionality", () => {
  beforeEach(() => {
    // Loading the sign-up page before each test
    cy.visit("https://uat.rici.co.za/");
  });
  it("should sign up with valid credentials", () => {
    // Generate a unique username and email to avoid conflicts with existing users
    const username = `testuser_${Date.now()}`;
    const email = `${username}@example.com`;

    cy.get('input[name="name"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="surname"]').type("New");
    cy.get('input[name="companyName"]').type("Sobsh");
    cy.get('input[name="password"]').type("Password123@");

    cy.get(".chakra-checkbox__input").check({ force: true });
    cy.get(".css-xqggig > .chakra-button").click();

    // Assert that the user is redirected to the home page or a confirmation page
    cy.url().should("include", "/home");
  });
  it("should display error messages for invalid inputs", () => {
    cy.get('input[name="name"]').type(" ");
    cy.get('input[name="email"]').type(" ");
    cy.get('input[name="surname"]').type(" ");
    cy.get('input[name="companyName"]').type(" ");
    cy.get('input[name="password"]').type(" ");
    // Assert that error messages are displayed for required fields
    cy.contains("First Name is required").should("be.visible");
    cy.contains("Last Name is required").should("be.visible");
    cy.contains("Company Name is required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");

    // Enter an invalid email and assert the error message for an invalid email format
    cy.get('input[name="email"]').type("invalid-email");
    cy.contains("Invalid email format").should("be.visible");
  });
  it("Check if the sign up button is disabled if the checkbox is not selected", () => {
    const username = `testuser_${Date.now()}`;
    const email = `${username}@example.com`;

    cy.get('input[name="name"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="surname"]').type("New");
    cy.get('input[name="companyName"]').type("Sobsh");
    cy.get('input[name="password"]').type("Password123@");

    //cy.get(".chakra-checkbox__input").check({ force: true });
    cy.get(".css-xqggig > .chakra-button").click();
    cy.contains("Please accept the Terms and Conditions").should("be.visible");
  });
});
