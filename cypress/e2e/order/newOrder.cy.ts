import { NewOrderPage } from '../../pages/order/NewOrderPage';
import { ClothingSizesPage } from '../../pages/order/ClothingSizesPage';
import { MenusPage } from '../../pages/menus/MenusPage';

describe('Orders', () => {

  const newOrderPage = new NewOrderPage(); // ✅ cria instância
  const clothingSizesPage = new ClothingSizesPage(); // ✅ cria instância
  const menusPage = new MenusPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
    //cy.login();
  });

  it('with one product - size M', () => {

    cy.createNewUser()
    menusPage.clickMasculino()
    newOrderPage.clickFisrtProduct()
    clothingSizesPage.chooseM()
    newOrderPage.clickComprar()
    newOrderPage.clickFinalizarCompra()

  });

  it.only('with two product - size M', () => {

    cy.createNewUser()
    menusPage.clickMasculino()
    newOrderPage.clickFisrtProduct()
    clothingSizesPage.chooseM()
    newOrderPage.clickSecondProduct()
    clothingSizesPage.chooseM()

  });

});