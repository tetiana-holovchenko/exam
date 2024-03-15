import user from '../fixtures/user.json'
import {fillAuthorizationFields} from '../support/helper';
import { itemSearchMainPage } from '../support/helper';
import loginPage from '../support/pages/loginPage';
import addtoBasket from '../support/pages/addtoBasket';
import mainSearch from '../support/pages/mainSearch';
import basket from '../support/pages/basket';
import addressSelect from '../support/pages/addressSelect';
import payment from '../support/pages/payment';
import userRegistration from '../support/pages/userRegistration';

describe('Registration', () => {
  before(() => {
  
    userRegistration.visit();
      loginPage.getWelcomeBanner().click();
      userRegistration.getOpenAccountButton().click();
      userRegistration.getOpenAccountButton2().click();
      userRegistration.getNotYetButton().click();


      userRegistration.getEmailField().type('tettest1@gmail.com');
      userRegistration.getEmailField().should('have.prop', 'value', user.email);

      userRegistration.getPasswordField().type('testpass');
      userRegistration.getPasswordField().should('have.prop', 'value', user.password);
      userRegistration.getRepeatPasswordField().type('testpass');
      userRegistration.getRepeatPasswordField().should('have.prop', 'value', user.password);

      userRegistration.getSecurityQuestion().click(); 

      userRegistration.getPickUpQuestion().eq(1).click();
  
      userRegistration.getSecurityAnswerField().type(user.securityAnswer);
      userRegistration.getSecurityAnswerField().should('have.prop', 'value', user.securityAnswer);


      userRegistration.getRegisterButton().click();

      loginPage.visit();
      fillAuthorizationFields(user.email, user.password);
      mainSearch.getBusketButton().should('be.visible');
      loginPage.getCookiesButton().click();
  });

  it('search with helper', () => {

    loginPage.getCookiesButton().click();
    const productName = 'OWASP Juice Shop Iron-Ons (16pcs)';
    itemSearchMainPage(productName).click();
    addtoBasket.getYourBasketButton().click();
    addtoBasket.getEmailcheck().contains(user.email);
    addtoBasket.getItemnamecheck().contains(productName);


    basket.getCheckoutButton().click();

    addressSelect.getAddNewAddressButton().should('be.enabled').click();

   addressSelect.getCountryField().type(user.country);
    addressSelect.getCountryField().should('have.prop', 'value', user.country);

    addressSelect.getNameField().type(user.name);
    addressSelect.getNameField().should('have.prop', 'value', user.name);

    addressSelect.getMobileField().type(user.mobile);
    addressSelect.getMobileField().should('have.prop', 'value', user.mobile);

    addressSelect.getZipField().type(user.zip);
    addressSelect.getZipField().should('have.prop', 'value', user.zip);

    addressSelect.getAddressField().type(user.adddress);
    addressSelect.getAddressField().should('have.prop', 'value', user.adddress);

    addressSelect.getCityField().type(user.city);
    addressSelect.getCityField().should('have.prop', 'value', user.city);

    addressSelect.getStateField().type(user.state);
    addressSelect.getStateField().should('have.prop', 'value', user.state);

    addressSelect.getSubmitButton().should('be.enabled').click();

    addressSelect.getRadioButton().eq(0).click();
    addressSelect.getContinueButton1().should('be.enabled').click();

    addressSelect.getRadioButton2().eq(1).click({ force: true });
    addressSelect.getContinueButton2().should('be.enabled').click();

    payment.getAddNewCardButton().first().click();
    payment.getNameField().type(user.name);
    payment.getNameField().should('have.prop', 'value', user.name);

    payment.getCardNumberField().type(user.card);
    payment.getCardNumberField().should('have.prop', 'value', user.card);
    payment.getExpiryMonthButton().select('2');

    payment.getExpiryYearButton().select('2081');

    payment.getSubmitButton().should('be.enabled').click();

    payment.getSubmitButton().first().click({ force: true });

    payment.getRadioButton().first().click();

    payment.getSubmitToProceedButton().should('be.enabled').click();

    payment.getPlaceYourOrderButton().should('be.enabled').click();

  });
});
