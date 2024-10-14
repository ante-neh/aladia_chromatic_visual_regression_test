describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays two todo items by default", () => {});

  /* ==== Test Created with Cypress Studio ==== */
  it("signup_e2e_process", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#email").clear();
    cy.get("#email").type("test@example.com");
    cy.get(".mt-8 > :nth-child(2)").click();
    cy.get("#name").clear();
    cy.get("#name").type("John");
    cy.get("#surname").clear();
    cy.get("#surname").type("Doe");
    cy.get("#email").clear();
    cy.get("#email").type("test@example.com");
    cy.get("#password").clear();
    cy.get("#password").type("123456");
    cy.get("#confirmPassword").clear();
    cy.get("#confirmPassword").type("123456");
    cy.get(".mt-8 > .justify-center").click();

    // Corrected code for input fields
    cy.get(".space-x-2 > :nth-child(1)").clear().type("1");
    cy.get(".space-x-2 > :nth-child(2)").clear().type("2");
    cy.get(".space-x-2 > :nth-child(3)").clear().type("3");
    cy.get(".space-x-2 > :nth-child(4)").clear().type("4");
    cy.get(".space-x-2 > :nth-child(5)").clear().type("5");
    cy.get(".space-x-2 > :nth-child(6)").clear().type("6");

    cy.get(".px-4").click();
    cy.get(".max-w-sm > .flex-col > .w-full").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('login_e2e_process', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('user1@example.com');
    cy.get('#email').type('user1@example.com');
    cy.get('.mt-8 > :nth-child(2)').click();
    cy.get('#password').clear('1');
    cy.get('#password').type('123456');
    cy.get('form.space-y-2 > .justify-center').click();
    /* ==== End Cypress Studio ==== */
  });
});
