import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';


describe('Authorization positive scenario', () => {


it('Authorization with valid data', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    fillAuthorizationFields(user.email, user.password);

    cy.log('The "Your Busket button should apper"')
    cy.get('button[routerlink="/basket"]').should('have.attr', 'aria-label', 'Show the shopping cart');

  });

});
  describe('Authorization negative scenario', () => {
  
  it('Authorization with all empty fields', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    fillAuthorizationFields('', '');
    //cy.log('Keeping authorization fields empty')
    //cy.get('#email').click();
    //cy.get('#password').click();
    //cy.get('mat-error[aria-live="polite"]').click();



    cy.log('Email and Pass fields are empty, highligted with text error')
    cy.get('mat-error[aria-live="polite"]').contains('Please provide an email address.');
    cy.get('mat-error[aria-live="polite"]').contains('Please provide a password.');

    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');

  });



  it('Authorization with empty Pass field', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    //cy.log('Fill in authorization fields')
    //cy.get('#email').type(user.email);
    //cy.get('#email').should('have.css', 'border-color', 'rgb(255, 255, 255)');

    //cy.get('#password').click();

    fillAuthorizationFields(user.email, '');
    cy.get('#loginButton').click();


    cy.log('Pass field highligted with text error, Log In button is disabled')
    cy.get('button[aria-label="Button to display the password"]').click();
    cy.get('mat-error[aria-live="polite"]').contains('Please provide a password.');

    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');

  });

  it('Authorization with empty Email field', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    //cy.log('Fill in authorization fields')
    //cy.get('#email').click();
    //cy.get('#password').type(user.password);
    //cy.get('#email').should('have.css', 'border-color', 'rgb(255, 255, 255)');
    //cy.get('mat-error[aria-live="polite"]').click();

    fillAuthorizationFields('', user.password);


    cy.log('Email field highligted with text error, Log In button is disabled')
    cy.get('mat-error[aria-live="polite"]').contains('Please provide an email address.');
    //cy.get('button[aria-label="Button to display the password"]').click();
    //cy.get('mat-error[aria-live="polite"]').contains('Please provide a password.');

    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');

  });
});
