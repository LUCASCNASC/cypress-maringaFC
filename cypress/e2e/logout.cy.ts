import { LogoutPage } from '../pages/LogoutPage';

describe('Logout', () => {

  const logoutPage = new LogoutPage();

  beforeEach(() => {
    cy.visit('/');
    cy.closeInitialMessage();
    cy.login();
  });

  it('logout sucess', () => {
    logoutPage.clickSair();
  });
});