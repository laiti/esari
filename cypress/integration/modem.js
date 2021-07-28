const url = Cypress.env('ESA_URL');

describe('Login to 4G router and change band', () => {
    it('Login to 4G router, change band and logout', (done) => {

        // Login
        cy.visit(url);
        cy.contains('LTE3301').should('exist');
        cy.contains('Welcome to the configuration interface. Please enter username and password to login.').should('exist');
        cy.get('input[name=un]').type(Cypress.env('ESA_USERNAME'));
        cy.get('input[name=pw]').type(Cypress.env('ESA_PASSWORD'));
        cy.get('input[type=submit]').click();
        cy.contains('Status').should('exist');

        // Change band
        cy.visit(`${url}configuration.htm`);
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('is undefined')
            done()
            return false
        })
        cy.visit(`${url}primx.htm?rc=&Nfr=1&Nwtype=14&Nwind=0&Nwanif=13`);
        cy.contains('3G/4G Information').should('exist');
        cy.get('input[name="more"]').click();
        cy.contains('LTE Band : ').should('exist');
        cy.get('select[name="N001E2830"])').select(Cypress.env('ESA_BAND'));
        cy.get('input[name="apply"]').click();
        cy.contains('Management WAN Entries').should('exist');

        // Logout
        cy.visit(url);
        cy.window().then(win => win.actionLogout());
    })
})
