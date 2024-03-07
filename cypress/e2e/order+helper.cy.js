import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';
import { itemSearchMainPage } from '../support/helper';

describe('Order suite', () => {
  beforeEach(() => {

    cy.visit('/admin/my-profile/');
    cy.log('Open authorization form');
    cy.visit('/#/login');
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    fillAuthorizationFields(user.email, user.password);

  });

  it('search', () => {

    cy.get('a[aria-label="dismiss cookie message"]').click();
    const productName = ' OWASP Juice Shop Hoodie ';
    itemSearchMainPage(productName);

  });
});
 