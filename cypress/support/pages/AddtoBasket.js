class AddtoBasket {
    
    getAddtoBasketButton() {
        cy.log('adding to the busket');
        return cy.get('button.btn-basket[aria-label="Add to Basket"]')
    }

    getYourBasketButton() {
        return cy.get('button.mat-button[routerlink="/basket"][aria-label="Show the shopping cart"]')
    }
    getEmailcheck() {
        return cy.get('h1 small')
    }
    getItemnamecheck() {
        return cy.get('mat-cell.ng-star-inserted');
    }
}

export default new AddtoBasket();
