describe('Login to 4G router and change band', () => {
    it('Login to 4G router', () => {
        cy.viewport(1280,1280);
        cy.visit('http://192.168.1.1');
        cy.contains('LTE3301').should('exist');
        cy.contains('Welcome to the configuration interface. Please enter username and password to login.').should('exist');
        cy.get('input[name=username]').type(Cypress.env('ESA_USERNAME'));
        cy.get('input[name=password]').type(Cypress.env('ESA_PASSWORD'));
    
        /*
        
        cy.contains('Accept All Cookies').click();
        cy.get('.auth0-label-submit').contains('Log In').click();
        cy.contains('Thanks for logging in').should('exist');
        cy.contains('Log In').should('not.exist');

        // Read CSV and add each rating in a loop
        for (const rating of _CSVData) {
            console.log(rating.link);
            cy.visit(rating.link).debug();

            cy.contains('Write a review').click();
        
            // Multiple textareas visible; correct one is with this class and aria-invalid attribute.
            // The elements in rating view can be hidden so we must use forces.
            cy.get('textarea[class^="MuiInputBase-input"][aria-invalid=false]').type(`${rating.rating} Rated on ${rating.date}.`, { force: true });

            // Sliders; rather complex nested div section
            cy.get(`div[data-testid="attribute-slider-aroma"] > ${sliderDivClass} ${sliderClasses[Number(rating.aroma) * 2]}"]`).click({ force: true });
            cy.get(`div[data-testid="attribute-slider-appearance"] > ${sliderDivClass} ${sliderClasses[Number(rating.appearance) * 4]}"]`).click({ force: true });
            cy.get(`div[data-testid="attribute-slider-flavor"] > ${sliderDivClass} ${sliderClasses[Number(rating.taste) * 2]}"]`).click({ force: true });
            cy.get(`div[data-testid="attribute-slider-mouthfeel"] > ${sliderDivClass} ${sliderClasses[Number(rating.mouthfeel) * 4]}"]`).click({ force: true });
            cy.get(`div[data-testid="attribute-slider-overall"] > ${sliderDivClass} ${sliderClasses[Number(rating.overall)]}"]`).click({ force: true });

            // Format the drink was served in
            cy.get('div[class="MuiButtonBase-root MuiChip-root mr-3 MuiChip-outlined MuiChip-clickable"] > span[class="MuiChip-label"]').contains(rating.format).click();

            // Finally, save rating
            cy.get('span').contains('Save').click();

            // Check that rating passed and write to log if not
            const divScore = Number(rating.total) / 10
            // At this point we should see a note that review has been updated
            cy.get('div').contains('Your review has been updated').should('not.exist').then((rated) => {
                cy.log(rating.link);
                cy.writeFile('data/failed.txt', `${rating.link}${os.EOL}`, { flag: 'a+' });
            })
            // And that we've already rated the product + scores
            cy.get('div').contains(`You rated this beer ${divScore.toString()}`).should('not.exist').then((rated) => {
                cy.log(rating.link);
                cy.writeFile('data/failed.txt', `${rating.link}${os.EOL}`, { flag: 'a+' });
            })
        }
        */
    })
})
  
