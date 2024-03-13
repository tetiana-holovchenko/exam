import user from '../fixtures/user.json'
import LoginPage from '../support/pages/LoginPage';
import UserRegistration from './pages/UserRegistration';



export function fillAuthorizationFields(useremail, password) {
    cy.log('Fill in authorization fields')
    useremail ? cy.get('#email').type(useremail) : cy.log('useremail field is empty');
    password ? cy.get('#password').type(password) : cy.log('password field is empty');

    LoginPage.getSubmitButton().click({ force: true });
    
}

export function registrationTet(useremail, userpassword) {

    cy.log('Pre-registration for Tet');

    UserRegistration.visit();
    LoginPage.getWelcomeBanner().click();
    UserRegistration.getOpenAccountButton().click();
    UserRegistration.getOpenAccountButton2().click();
    UserRegistration.getNotYetButton().click();

    UserRegistration.getEmailField().type(useremail);
    UserRegistration.getEmailField().should('have.prop', 'value', useremail);

    UserRegistration.getPasswordField().type(userpassword);
    UserRegistration.getPasswordField().should('have.prop', 'value', userpassword);

    UserRegistration.getRepeatPasswordField().type(userpassword);
    UserRegistration.getRepeatPasswordField().should('have.prop', 'value', userpassword);

    UserRegistration.getSecurityQuestion().click();
    UserRegistration.getPickUpQuestion().eq(1).click();

    UserRegistration.getSecurityAnswerField().then(($input) => {
        if ($input.length > 0) {
            UserRegistration.getSecurityAnswerField().type('Some answer'); 
            UserRegistration.getSecurityAnswerField().should('have.prop', 'value', 'Some answer');
        }
    });

    UserRegistration.getRegisterButton().click();
}

export function itemSearchMainPage(productName) {
    cy.log('Find item');
    cy.get('body').then((body) => {
        if (body.find(`div.item-name:contains("${productName}")`).length > 0) {
            cy.get(`div.item-name:contains("${productName}")`);
            cy.get('button.btn-basket[aria-label="Add to Basket"]').eq(4).click();


        } else {
            cy.get('button.mat-paginator-navigation-next').click({ force: true });
            itemSearchMainPage(productName);
        }
    });
}
