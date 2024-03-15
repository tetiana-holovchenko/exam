import user from '../fixtures/user.json'
import { fillAuthorizationFields } from '../support/helper';
import { registrationUser } from '../support/helper';
import loginPage from '../support/pages/LoginPage';
import userRegistration from '../support/pages/UserRegistration';
import mainSearch from '../support/pages/MainSearch';




describe('Registration', () => {
  before(() => {
  
  userRegistration.visit();
      loginPage.getWelcomeBanner().click();
    userRegistration.getOpenAccountButton().click();
    userRegistration.getOpenAccountButton2().click();
    userRegistration.getNotYetButton().click();


    userRegistration.getEmailField().type('tettest1@gmail.com');
    userRegistration.getEmailField().should('have.prop', 'value', user.email);

    userRegistration.getPasswordField().type('testpass');
    userRegistration.getPasswordField().should('have.prop', 'value', user.password);
    userRegistration.getRepeatPasswordField().type('testpass');
    userRegistration.getRepeatPasswordField().should('have.prop', 'value', user.password);

    userRegistration.getSecurityQuestion().click(); 

    userRegistration.getPickUpQuestion().eq(1).click();
  
    userRegistration.getSecurityAnswerField().type(user.securityAnswer);
    userRegistration.getSecurityAnswerField().should('have.prop', 'value', user.securityAnswer);


    userRegistration.getRegisterButton().click();
});



  it('Authorization with valid data', () => {

    loginPage.visit();
    fillAuthorizationFields(user.email, user.password);
    mainSearch.getBusketButton().should('be.visible');

  });


describe('Authorization negative scenario', () => {

  it('Authorization with all empty fields', () => {

    loginPage.visit();
    loginPage.getWelcomeBanner().click();

    fillAuthorizationFields('', '');

    loginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    loginPage.getErrorMessageText().should('contain', 'Invalid email or password.');
  });

  it('Authorization with empty Pass field', () => {

    cy.log('Open autorization form');
    loginPage.visit();
    loginPage.getWelcomeBanner().click();

    fillAuthorizationFields(user.email, '');

    loginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    loginPage.getErrorMessageText().should('contain', 'Invalid email or password.');

  });

  it('Authorization with empty Email field', () => {

    cy.log('Open autorization form');
    loginPage.visit();
    loginPage.getWelcomeBanner().click();

    fillAuthorizationFields('', user.password);

    loginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    loginPage.getErrorMessageText().should('contain', 'Invalid email or password.');
  });
});
});
