
class LoginPage {

    visit() {
        cy.log('Open autorization form');
        cy.visit('/#/login');
    }

    getLoginNameField() {
        return cy.get('#email')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getSubmitButton() {
        return cy.get('#loginButton')
    }

    getSubmitButtonDisabled() {
        cy.log('LogIn button is disabled')
        return cy.get('button#loginButton[disabled="true"]')
    }

    getCookiesButton() {
        cy.log('Accept cookies')
        return cy.get('a[aria-label="dismiss cookie message"]')
    }

    getWelcomeBanner() {
        cy.log('Closing Popup')
        return cy.get('button[aria-label="Close Welcome Banner"]');
    }
    
    getErrorMessageText() {
        cy.log('error: Invalid email or password')
        return cy.get('div.error.ng-star-inserted')
    }

    fillLoginFields(useremail, password) {
        cy.log('Fill in authorization fields')
        useremail ? this.getLoginNameField.type(useremail) : cy.log('useremail field is empty');
        password ? this.getPasswordField.type(password) : cy.log('password field is empty');
        this.getSubmitButton.click({ force: true });

    }
}



export default new LoginPage()