import user from '../fixtures/user.json'
import loginPage from '../support/pages/LoginPage';
import { fillAuthorizationFields } from '../support/helper';
import mainSearch from '../support/pages/MainSearch';
import feedback from '../support/pages/Feedback';
import userRegistration from '../support/pages/userRegistration';

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

        loginPage.visit();
        fillAuthorizationFields(user.email, user.password);
        mainSearch.getBusketButton().should('be.visible');
        loginPage.getCookiesButton().click();
    });
    it('Fillin CustomerFeedback form', () => {
        feedback.visit();

        feedback.getEmailField().should('be.disabled');
        feedback.getCommentField().type(user.comment);

        feedback.getSlider().type('{rightarrow}');

        feedback.getCaptcha().then(($captcha) => {
            const captchaExpression = $captcha.text(); 
            const result = eval(captchaExpression);
            feedback.getCaptchaResultField().type(result);
        });

        feedback.getSubmitButton().should('be.enabled').click();
        feedback.getSuccessPopup().should('contain', 'Thank you for your feedback.');
    });
});
