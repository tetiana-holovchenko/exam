import LoginPage from "./loginPage";
 
class MainPage {

    visit () {
        cy.visit('#/search');
    }

    getBusketButton() {
        cy.log('The "Your Busket button should apper"')
        return cy.get('button[routerlink="/basket"][aria-label="Show the shopping cart"]');
    
    }

}

export default new MainPage();