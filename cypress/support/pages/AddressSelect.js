class AddressSelect {

    getAddNewAddressButton() {
        cy.log('Add new address button');
        return cy.get('button[aria-label="Add a new address"]')
    }

    getCountryField() {
        cy.log('Fill in "Adding new address"');
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-9[placeholder="Please provide a country."]')
    }

    getNameField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-10[placeholder="Please provide a name."]')
    }

    getMobileField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-11[placeholder="Please provide a mobile number."]')
    }

    getZipField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-12[placeholder="Please provide a ZIP code."]')
    }

    getAddressField() {
        return cy.get('textarea.mat-input-element#address')
    }

    getCityField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-14[placeholder="Please provide a city."]')
    }

    getStateField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-15[placeholder="Please provide a state."]')
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
