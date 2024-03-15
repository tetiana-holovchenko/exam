class Feedback {

    visit() {
        cy.log('Open Feedback form page');
        cy.visit('/#/contact');
    }

    getEmailField() {
        cy.log('Fill in Customer Feedback form');
        return cy.get('input[aria-label="Field with the name of the author"]')
    }

    getCommentField() {
        return cy.get('#comment')
    }

    getSlider() {
        return cy.get('mat-slider#rating')
    }

    getCaptcha() {
        cy.log('Solve captcha');
        return cy.get('code#captcha')
    }

    getCaptchaResultField() {
        return cy.get('input#captchaControl[aria-label="Field for the result of the CAPTCHA code"]')
    }

    getSubmitButton() {
        return cy.get('button#submitButton')
    }

    getSuccessPopup() {
        return cy.get('span.mat-simple-snack-bar-content')
    }

}

export default new Feedback()
