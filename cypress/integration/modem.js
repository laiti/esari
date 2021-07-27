describe('Login to 4G router and change band', () => {
    it('Login to 4G router', () => {
        cy.viewport(1280,1280);
        cy.visit(Cypress.env('ESA_URL'));
        cy.contains('LTE3301').should('exist');
        cy.contains('Welcome to the configuration interface. Please enter username and password to login.').should('exist');
        cy.get('input[name=un]').type(Cypress.env('ESA_USERNAME'));
        cy.get('input[name=pw]').type(Cypress.env('ESA_PASSWORD'));
        cy.get('input[type=submit]').click();
    })
})
  
