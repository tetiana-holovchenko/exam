import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';
import { registrationTet } from '../support/helper';

describe('Authorization positive scenario', () => {

  before(() => {

    const useremail = 'tettest@gmail.com';
    const userpassword = 'testpass';
    registrationTet(useremail, userpassword);
    
  });

it('Authorization with valid data', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');

    fillAuthorizationFields(user.email, user.password);

    cy.log('The "Your Busket button should apper"')
    cy.get('button[routerlink="/basket"][aria-label="Show the shopping cart"]').should('be.visible');

  });
});


  describe('Authorization negative scenario', () => {
  
  it('Authorization with all empty fields', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    fillAuthorizationFields('', '');

    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');
    cy.log('error: Invalid email or password')
    cy.get('div.error.ng-star-inserted').contains('Invalid email or password.');
  });



  it('Authorization with empty Pass field', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

  
    fillAuthorizationFields(user.email, '');
   

    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');
    cy.log('error: Invalid email or password')
    cy.get('div.error.ng-star-inserted').contains('Invalid email or password.');

  });

  it('Authorization with empty Email field', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    

    fillAuthorizationFields('', user.password);



    cy.log('LogIn button is disabled')
    cy.get('button#loginButton[disabled="true"]').should('have.attr', 'aria-label', 'Login');
    cy.log('error: Invalid email or password')
    cy.get('div.error.ng-star-inserted').contains('Invalid email or password.');
  });
});
