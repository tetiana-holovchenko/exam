import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import { fillAuthorizationFields } from '../support/helper';
import userRegistration from '../support/pages/UserRegistration';
import loginPage from '../support/pages/LoginPage';
import mainSearch from '../support/pages/MainSearch';

user.email = faker.internet.email();
user.password = faker.internet.password();
user.securityAnswer = faker.person.lastName();

describe('Register with valid data', () => {
  it('Registration', () => {
  
    userRegistration.visit();
    loginPage.getWelcomeBanner().click();
    userRegistration.getOpenAccountButton().click();
    userRegistration.getOpenAccountButton2().click();
    userRegistration.getNotYetButton().click();


    userRegistration.getEmailField().type(user.email);
    userRegistration.getEmailField().should('have.prop', 'value', user.email);

    userRegistration.getPasswordField().type(user.password);
    userRegistration.getPasswordField().should('have.prop', 'value', user.password);
    userRegistration.getRepeatPasswordField().type(user.password);
    userRegistration.getRepeatPasswordField().should('have.prop', 'value', user.password);

    userRegistration.getSecurityQuestion().click(); 

    userRegistration.getPickUpQuestion().eq(1).click();

    userRegistration.getSecurityAnswerField().type(user.securityAnswer);
    userRegistration.getSecurityAnswerField().should('have.prop', 'value', user.securityAnswer);


    userRegistration.getRegisterButton().click();

});


it('Authorization', () => {
loginPage.visit();
loginPage.getWelcomeBanner().click();

fillAuthorizationFields (user.email, user.password);
mainSearch.getBusketButton().should('be.visible');

});
});