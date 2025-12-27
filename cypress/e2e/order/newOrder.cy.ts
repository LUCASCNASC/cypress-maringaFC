import { NewOrderPage } from '../../pages/order/NewOrderPage';
import { ClothingSizesPage } from '../../pages/order/ClothingSizesPage';
import { MenusPage } from '../../pages/menus/MenusPage';

describe('Orders', () => {

  const newOrderPage = new NewOrderPage();
  const clothingSizesPage = new ClothingSizesPage();
  const menusPage = new MenusPage();

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
  });

  //até colocar os dados de pagamento, falta o pagamento
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