import user from '../fixtures/user.json'
import LoginPage from '../support/pages/LoginPage';
import { fillAuthorizationFields } from '../support/helper';
import MainSearch from '../support/pages/MainSearch';
import Feedback from '../support/pages/Feedback';



describe('CustomerFeedback', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.getWelcomeBanner().click();
        fillAuthorizationFields(user.email, user.password);
        MainSearch.getBusketButton().should('be.visible');
        LoginPage.getCookiesButton().click();
    });
    it('Fillin CustomerFeedback form', () => {
        Feedback.visit();

        Feedback.getEmailField().should('be.disabled');
        Feedback.getCommentField().type(user.comment);

        Feedback.getSlider().type('{rightarrow}');

        Feedback.getCaptcha().then(($captcha) => {
            const captchaExpression = $captcha.text(); 
            const result = eval(captchaExpression);
            Feedback.getCaptchaResultField().type(result);
        });

        Feedback.getSubmitButton().should('be.enabled').click();
        Feedback.getSuccessPopup().should('contain', 'Thank you for your feedback.');
    });
});
