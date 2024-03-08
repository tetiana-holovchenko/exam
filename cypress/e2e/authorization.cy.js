import user from '../fixtures/user.json'
import { fillAuthorizationFields } from '../support/helper';
import { registrationTet } from '../support/helper';
import LoginPage from '../support/pages/LoginPage';
import MainSearch from '../support/pages/MainSearch';

describe('Authorization positive scenario', () => {

  before(() => {

    const useremail = 'tettest@gmail.com';
    const userpassword = 'testpass';
    registrationTet(useremail, userpassword);

  });

  it('Authorization with valid data', () => {

    LoginPage.visit();
    fillAuthorizationFields(user.email, user.password);
    MainSearch.getBusketButton().should('be.visible');

  });
});


describe('Authorization negative scenario', () => {

  it('Authorization with all empty fields', () => {

    LoginPage.visit();
    LoginPage.getWelcomeBanner().click();

    fillAuthorizationFields('', '');

    LoginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    LoginPage.getErrorMessageText().should('contain', 'Invalid email or password.');
  });

  it('Authorization with empty Pass field', () => {

    cy.log('Open autorization form');
    LoginPage.visit();
    LoginPage.getWelcomeBanner().click();

    fillAuthorizationFields(user.email, '');

    LoginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    LoginPage.getErrorMessageText().should('contain', 'Invalid email or password.');

  });

  it('Authorization with empty Email field', () => {

    cy.log('Open autorization form');
    LoginPage.visit();
    LoginPage.getWelcomeBanner().click();

    fillAuthorizationFields('', user.password);

    LoginPage.getSubmitButtonDisabled().should('have.attr', 'aria-label', 'Login');
    LoginPage.getErrorMessageText().should('contain', 'Invalid email or password.');
  });
});
