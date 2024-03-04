

export function fillAuthorizationFields(useremail, password){
    cy.log('Fill in authorization fields')
    useremail ? cy.get('#email').type(useremail) : cy.log('useremail field is empty');
    password ? cy.get('#password').type(password) : cy.log('password field is empty');

    cy.get('#loginButton').click();

}