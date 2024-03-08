import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';
import { itemSearchMainPage } from '../support/helper';
import LoginPage from '../support/pages/LoginPage';
import AddtoBasket from '../support/pages/AddtoBasket';
import MainSearch from '../support/pages/MainSearch';
import Basket from '../support/pages/Basket';
import AddressSelect from '../support/pages/AddressSelect';
import Payment from '../support/pages/Payment';



describe('Order suite', () => {
  beforeEach(() => {

    LoginPage.visit();
    LoginPage.getWelcomeBanner().click();
    fillAuthorizationFields(user.email, user.password);
    MainSearch.getBusketButton().should('be.visible');
    LoginPage.getCookiesButton().click();

  });

  it('search with helper', () => {

    LoginPage.getCookiesButton().click();
    const productName = 'OWASP Juice Shop Hoodie';
    itemSearchMainPage(productName);
    AddtoBasket.getYourBasketButton().click();
    Basket.getCheckoutButton().should('be.enabled');
    
    Basket.getCheckoutButton().click();

    AddressSelect.getAddNewAddressButton().should('be.enabled').click();

    AddressSelect.getCountryField().type(user.country);
    AddressSelect.getCountryField().should('have.prop', 'value', user.country);

    AddressSelect.getNameField().type(user.name);
    AddressSelect.getNameField().should('have.prop', 'value', user.name);

    AddressSelect.getMobileField().type(user.mobile);
    AddressSelect.getMobileField().should('have.prop', 'value', user.mobile);

    AddressSelect.getZipField().type(user.zip);
    AddressSelect.getZipField().should('have.prop', 'value', user.zip);

    AddressSelect.getAddressField().type(user.adddress);
    AddressSelect.getAddressField().should('have.prop', 'value', user.adddress);

    AddressSelect.getCityField().type(user.city);
    AddressSelect.getCityField().should('have.prop', 'value', user.city);

    AddressSelect.getStateField().type(user.state);
    AddressSelect.getStateField().should('have.prop', 'value', user.state);

    AddressSelect.getSubmitButton().should('be.enabled').click();

    AddressSelect.getRadioButton().eq(0).click();
    AddressSelect.getContinueButton1().should('be.enabled').click();

    AddressSelect.getRadioButton2().eq(1).click({ force: true });
    AddressSelect.getContinueButton2().should('be.enabled').click();

    Payment.getAddNewCardButton().first().click();
    Payment.getNameField().type(user.name);
    Payment.getNameField().should('have.prop', 'value', user.name);

    Payment.getCardNumberField().type(user.card);
    Payment.getCardNumberField().should('have.prop', 'value', user.card);
    Payment.getExpiryMonthButton().select('2');

    Payment.getExpiryYearButton().select('2081');

    Payment.getSubmitButton().should('be.enabled').click();

    Payment.getSubmitButton().first().click({ force: true });

    Payment.getRadioButton().first().click();

    Payment.getSubmitToProceedButton().should('be.enabled').click();

    Payment.getPlaceYourOrderButton().should('be.enabled').click();

  });
});
