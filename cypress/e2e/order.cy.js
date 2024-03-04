import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';

describe('Order suite', () => {
    it('Order from page', () => {
        
        cy.log('Open autorization form');
        cy.visit('/#/login');
        cy.get('button[aria-label="Close Welcome Banner"]').click();

fillAuthorizationFields(user.email, user.password);
    
    });
});