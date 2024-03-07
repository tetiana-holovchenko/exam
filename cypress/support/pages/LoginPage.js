import BasePage from "./BasePage";

class LoginPage extends BasePage {

    visit{
        cy.visit('/#/login');
    }

    getLoginNameField() {
        return cy.get('#email')
    }

{
    getPasswordField() {
        return cy.get('#password')
    }
    {
        getSubmitButton() {
            return cy.get('#loginButton' )
        }

        fillLoginFields(useremail, password){
            cy.log('Fill in authorization fields')
            useremail ? this.getLoginNameField.type(useremail) : cy.log('useremail field is empty');
            password ? this.getPasswordField.type(password) : cy.log('password field is empty');

            this.getSubmitButton.click({ force: true });

        }
    }
}


export default new LoginPage()