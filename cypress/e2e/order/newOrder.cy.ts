import { NewOrderPage } from '../../pages/order/NewOrderPage';
import { ClothingSizesPage } from '../../pages/order/ClothingSizesPage';
import { MenusPage } from '../../pages/MenusPage';

describe('Orders', () => {

  const newOrderPage = new NewOrderPage(); // ✅ cria instância
  const clothingSizesPage = new ClothingSizesPage(); // ✅ cria instância
  const menusPage = new MenusPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
    cy.login();
  });

  it.skip('with one product - size P', () => {

    newOrderPage.clickCarrinhoVazio()
    menusPage.clickMasculino()
    newOrderPage.clickFisrtProduct()
    clothingSizesPage.chooseP()
    //newOrderPage.validateEstoqueDisponivel()
    newOrderPage.clickComprar()

  });

});