class Payment {


    getAddNewCardButton() {
        cy.log('Add new card');
        return cy.get('mat-expansion-panel-header.mat-expansion-panel-header')
    }

    getNameField() {
        cy.log('Fill in details');
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-16[aria-required="true"]')
    }

    getCardNumberField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control#mat-input-17[type="number"][aria-required="true"]')
    }

    getExpiryMonthButton() {
        return cy.get('select.mat-input-element.mat-form-field-autofill-control#mat-input-18[aria-required="true"]')
    }

    getExpiryYearButton() {
        return cy.get('select.mat-input-element.mat-form-field-autofill-control#mat-input-19[aria-required="true"]')
    }

    getSubmitButton() {
        return cy.get('button#submitButton')
    }

    getRadioButton() {
        return cy.get('span.mat-radio-container')
    }

    getSubmitToProceedButton() {
        return cy.get('button.mat-raised-button[aria-label="Proceed to review"]')
    }
    
    getPlaceYourOrderButton() {
        cy.log('Order Summary')
        return cy.get('button#checkoutButton')
    }
}
    export default new Payment();
