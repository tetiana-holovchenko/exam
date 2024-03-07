import user from '../fixtures/user.json'

describe('CustomerFeedback', () => {

    it('Fillin CustomerFeedback', () => {

    cy.visit('/#/contact');
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.log('Fill in Customer Feedback form');

    cy.get('#mat-input-1').should('be.disabled');
    cy.get('#comment').type(user.comment);

    cy.get('mat-slider#rating').type('{rightarrow}');
    
    cy.get('code#captcha').then(($captcha) => {
        const captchaExpression = $captcha.text(); // Получаем текст капчи
        const result = eval(captchaExpression);
    cy.get('input#captchaControl[aria-label="Field for the result of the CAPTCHA code"]').type(result);


    cy.get('button#submitButton').should('be.enabled').click();

});

});

});
