import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';
import { itemSearchMainPage } from '../support/helper';


describe('Order suite', () => {
    beforeEach(() => {
  
      cy.visit('/admin/my-profile/');
      cy.log('Open authorization form');
      cy.visit('/#/login');
      cy.get('button[aria-label="Close Welcome Banner"]').click();
      fillAuthorizationFields(user.email, user.password);
      cy.get('a[aria-label="dismiss cookie message"]').click();

    });
  
    it('Order with positive scenario', () => {
        cy.log('adding to the busket');
        cy.get('button.btn-basket[aria-label="Add to Basket"]').eq(0).click();
        cy.get('button.mat-button[routerlink="/basket"][aria-label="Show the shopping cart"]').click();
        cy.get('Button#checkoutButton').should('be.enabled');
        cy.get('Button#checkoutButton').click();

        cy.log('Select an address');
        cy.get('button[aria-label="Add a new address"]').should('be.enabled').click();

        cy.log('Adding new address');
        cy.get('#mat-input-3').type(user.country);
        cy.get('#mat-input-3').should('have.prop', 'value', user.country);

        cy.get('#mat-input-4').type(user.name);
        cy.get('#mat-input-4').should('have.prop', 'value', user.name);

        cy.get('#mat-input-5').type(user.mobile);
        cy.get('#mat-input-5').should('have.prop', 'value', user.mobile);

        cy.get('#mat-input-6').type(user.zip);
        cy.get('#mat-input-6').should('have.prop', 'value', user.zip);

        cy.get('textarea.mat-input-element#address').type(user.adddress);
        cy.get('textarea.mat-input-element#address').should('have.prop', 'value', user.adddress);

        cy.get('#mat-input-8').type(user.city);
        cy.get('#mat-input-8').should('have.prop', 'value', user.city);

        cy.get('#mat-input-9').type(user.state);
        cy.get('#mat-input-9').should('have.prop', 'value', user.state);

        cy.get('#submitButton').should('be.enabled').click();

        cy.get('span.mat-radio-container').first().click();
        cy.get('button.mat-raised-button[aria-label="Proceed to payment selection"]').should('be.enabled').click();
        cy.get('span.mat-radio-outer-circle').eq(1).click({force: true});
        cy.get('button.mat-raised-button[color="primary"][aria-label="Proceed to delivery method selection"]').should('be.enabled').click();

        cy.log('Payment');
        cy.get('mat-expansion-panel-header.mat-expansion-panel-header').first().click();
        cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-10"]').type(user.name);
        cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-10"]').should('have.prop', 'value', user.name);

        cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-11"][type="number"]').type(user.card);
        cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-11"][type="number"]').should('have.prop', 'value', user.card);
        cy.get('select#mat-input-12').select('2');

        cy.get('select#mat-input-13').select('2081');

        cy.get('button#submitButton').should('be.enabled').click();

        cy.get('span.mat-radio-container').first().click({force: true});

        cy.get('button.mat-raised-button[aria-label="Proceed to review"]').should('be.enabled').click();
        cy.get('button#checkoutButton').should('be.enabled').click();
        //cy.get('div[_ngcontent-odf-c236]').should('have text', 'Your order has been placed and is being processed.');

        });
    });