import user from '../fixtures/user.json'
//import {faker} from '@faker-js/faker'




describe('register with valid data', () => {
  it('Open registration form', () => {
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
    //cy.get('span.mat-option-text').select(user.securityQuestion);
    //cy.get('mat-select[aria-label="Selection list for the security question"]').click({ force: true });
    //  cy.get('mat-select[aria-label="Selection list for the security question"]').click();
    
    
    //cy.contains('span.mat-option-text', user.securityQuestion).click();
    //cy.contains('span.mat-option-text:contains("Mother\'s maiden name?")').click();
    cy.contains('span.mat-option-text').eq(1).click();
    cy.get('span.mat-option-text').should('have.text', user.securityQuestion);
    
    cy.get('input#securityAnswerControl').type(user.securityAnswer);
    cy.get('input#securityAnswerControl').should('have.prop', 'value', user.securityAnswer);


    cy.get('#AccountFrm_firstname').type(user.firstname);



  });

  
  it('Authorization', () => {
    cy.visit('/');
    // Ваши действия для авторизации здесь
  });
});