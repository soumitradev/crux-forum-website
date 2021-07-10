describe('Should Load Homepage', () => {
  it('Loads Homepage', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
});
