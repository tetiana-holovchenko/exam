class AddtoBasket {

    getAddtoBasketButton() {
        cy.log('adding to the busket');
        return cy.get('button.btn-basket[aria-label="Add to Basket"]')
    }

    getYourBasketButton() {
        return cy.get('button.mat-button[routerlink="/basket"][aria-label="Show the shopping cart"]')
    }
}

export default new AddtoBasket();
