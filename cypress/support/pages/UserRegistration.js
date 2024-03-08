
class UserRegistration {
    visit() {
        // cy.log('Open registration form');
        cy.visit('/');
    }

    getOpenAccountButton() {
        return cy.get('#navbarAccount');
    }

    getOpenAccountButton2() {
        return cy.get('#navbarLoginButton');
    }

    getNotYetButton() {
        cy.log('Not yet a customer')
        return cy.get('a[routerlink="/register"].primary-link');
    }

    getEmailField() {
        cy.log('Fill in the fields Personal Details fields');
        return cy.get('input#emailControl');
    }

    getPasswordField() {
        return cy.get('input#passwordControl');
    }

    getRepeatPasswordField() {
        return cy.get('input#repeatPasswordControl');
    }

    getSecurityQuestion() {
        cy.log('Security question')
        return cy.get('mat-select[aria-label="Selection list for the security question"]');
    }

    getPickUpQuestion() {
        return cy.get('.mat-option-text');
    }

    getSecurityAnswerField() {
        return cy.get('input#securityAnswerControl');
    }

    getRegisterButton() {
        return cy.get('#registerButton');
    }


}

export default new UserRegistration;