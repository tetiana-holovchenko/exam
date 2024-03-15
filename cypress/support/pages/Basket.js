class Basket {

    getCheckoutButton() {
        cy.log('Your Basket');
        return cy.get('Button#checkoutButton')
    }

}

export default new Basket();