import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'

user.email = faker.internet.email();
user.password = faker.internet.password();
user.securityAnswer = faker.person.lastName();

describe('Register with valid data', () => {
  it('Registration', () => {
    cy.log('Open registration form')
    cy.visit('/');
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('a[routerlink="/register"].primary-link').click();


    cy.log('Fill in the fields Personal Details fields');
    cy.get('input#emailControl').type(user.email);
    cy.get('input#emailControl').should('have.prop', 'value', user.email);

    cy.get('input#passwordControl').type(user.password);
    cy.get('input#passwordControl').should('have.prop', 'value', user.password);
    cy.get('input#repeatPasswordControl').type(user.password);
    cy.get('input#repeatPasswordControl').should('have.prop', 'value', user.password);

    cy.log('Security question')
    cy.get('mat-select[aria-label="Selection list for the security question"]').click(); //+
  
    cy.get('.mat-option-text').eq(1).click();
    //cy.contains('.mat-option-text').should('have.html', user.securityQuestion);
    
    cy.get('input#securityAnswerControl').type(user.securityAnswer);
    cy.get('input#securityAnswerControl').should('have.prop', 'value', user.securityAnswer);


    cy.get('#registerButton').click();



  });

  
  it('Authorization', () => {

    cy.log('Open autorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();

    cy.log('Fill in authorization fields')
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);

    cy.get('#loginButton').click();

    cy.log('The "Your Busket button should apper"')
    cy.get('button[routerlink="/basket"]').should('have.attr', 'aria-label', 'Show the shopping cart');

  });
});