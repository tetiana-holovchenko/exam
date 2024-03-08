class Payment {


    getAddNewCardButton() {
        cy.log('Add new card');
        return cy.get('mat-expansion-panel-header.mat-expansion-panel-header')
    }

    getNameField() {
        cy.log('Fill in details');
        return cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-10"]')
    }

    getCardNumberField() {
        return cy.get('input.mat-input-element.mat-form-field-autofill-control[aria-required="true"][id="mat-input-11"][type="number"]')
    }

    getExpiryMonthButton() {
        return cy.get('select#mat-input-12')
    }

    getExpiryYearButton() {
        return cy.get('select#mat-input-13')
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
