class AddressSelect {

    getAddNewAddressButton() {
        cy.log('Add new address button');
        return cy.get('button[aria-label="Add a new address"]')
    }

    getCountryField() {
        cy.log('Fill in "Adding new address"');
        return cy.get('#mat-input-3')
    }

    getNameField() {
        return cy.get('#mat-input-4')
    }

    getMobileField() {
        return cy.get('#mat-input-5')
    }

    getZipField() {
        return cy.get('#mat-input-6')
    }

    getAddressField() {
        return cy.get('textarea.mat-input-element#address')
    }

    getCityField() {
        return cy.get('#mat-input-8')
    }

    getStateField() {
        return cy.get('#mat-input-9')
    }
    
    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getRadioButton() {
        cy.log('Select an address');
        return cy.get('span.mat-radio-container')
    }

    getContinueButton1() {
        return cy.get('button.mat-raised-button[aria-label="Proceed to payment selection"]')
    }

    getRadioButton2() {
        cy.log('Delivery address')
        return cy.get('span.mat-radio-outer-circle')
    }
    
    getContinueButton2() {
        cy.log('Delivery speed')
        return cy.get('button[aria-label="Proceed to delivery method selection"].mat-focus-indicator.btn.nextButton')
    }
}

export default new AddressSelect();
