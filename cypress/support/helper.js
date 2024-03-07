

export function fillAuthorizationFields(useremail, password) {
    cy.log('Fill in authorization fields')
    useremail ? cy.get('#email').type(useremail) : cy.log('useremail field is empty');
    password ? cy.get('#password').type(password) : cy.log('password field is empty');

    cy.get('#loginButton').click({ force: true });

}

export function registrationTet(useremail, userpassword) {

    cy.log('Pre-registration for Tet');

    cy.visit('/');
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('a[routerlink="/register"].primary-link').click();


    cy.log('Fill in the fields Personal Details fields');
    cy.get('input#emailControl').type(useremail); // Используем переданный email
    cy.get('input#emailControl').should('have.prop', 'value', useremail);

    cy.get('input#passwordControl').type(userpassword); // Используем переданный пароль
    cy.get('input#passwordControl').should('have.prop', 'value', userpassword);
    cy.get('input#repeatPasswordControl').type(userpassword);
    cy.get('input#repeatPasswordControl').should('have.prop', 'value', userpassword);

    cy.log('Security question');
    cy.get('mat-select[aria-label="Selection list for the security question"]').click();
    cy.get('.mat-option-text').eq(1).click();

    // Добавляем условие наличия поля ввода для ответа на вопрос безопасности
    cy.get('input#securityAnswerControl').then(($input) => {
        if ($input.length > 0) {
            cy.get('input#securityAnswerControl').type('Some answer'); // Предполагаемый ответ
            cy.get('input#securityAnswerControl').should('have.prop', 'value', 'Some answer');
        }
    });

    cy.get('#registerButton').click();
}

export function itemSearchMainPage(productName) {
    cy.log('Find item');
    cy.get('body').then((body) => {
        if (body.find(`div.item-name:contains("${productName}")`).length > 0) {
            cy.get(`div.item-name:contains("${productName}")`);
            //cy.get('.item-name').should('have.text', productName);
            //cy.get('h1').should('have.text', productName);
            // cy.get('button.btn-basket[aria-label="Add to Basket"]').click();
            // cy.get(`div.item-name:contains("${productName}")`).find('button.btn-basket[aria-label="Add to Basket"]').click();
            cy.get('button.btn-basket[aria-label="Add to Basket"]').eq(4).click();


        } else {
            cy.get('button.mat-paginator-navigation-next').click({ force: true });
            itemSearchMainPage(productName);
        }
    });
}
