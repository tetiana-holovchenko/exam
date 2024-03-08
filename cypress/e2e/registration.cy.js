import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import { fillAuthorizationFields } from '../support/helper';
import UserRegistration from '../support/pages/UserRegistration';
import LoginPage from '../support/pages/LoginPage';
import MainSearch from '../support/pages/MainSearch';

user.email = faker.internet.email();
user.password = faker.internet.password();
user.securityAnswer = faker.person.lastName();

describe('Register with valid data', () => {
  it('Registration', () => {
  
    UserRegistration.visit();
        LoginPage.getWelcomeBanner().click();
    UserRegistration.getOpenAccountButton().click();
    UserRegistration.getOpenAccountButton2().click();
    UserRegistration.getNotYetButton().click();


    UserRegistration.getEmailField().type(user.email);
    UserRegistration.getEmailField().should('have.prop', 'value', user.email);

    UserRegistration.getPasswordField().type(user.password);
    UserRegistration.getPasswordField().should('have.prop', 'value', user.password);
    UserRegistration.getRepeatPasswordField().type(user.password);
    UserRegistration.getRepeatPasswordField().should('have.prop', 'value', user.password);

    UserRegistration.getSecurityQuestion().click(); 
  
    UserRegistration.getPickUpQuestion().eq(1).click();
    
    UserRegistration.getSecurityAnswerField().type(user.securityAnswer);
    UserRegistration.getSecurityAnswerField().should('have.prop', 'value', user.securityAnswer);


    UserRegistration.getRegisterButton().click();

  });

  
  it('Authorization', () => {
    LoginPage.visit();
    LoginPage.getWelcomeBanner().click();

    fillAuthorizationFields (user.email, user.password);
    MainSearch.getBusketButton().should('be.visible');

  });
});