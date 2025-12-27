import { LoginPage } from '../pages/LoginPage';
import users from '../support/users.json';

describe('Login', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://www.transfermarkt.com.br/');
  });

  it.only('login sucess', () => {

    
  });

});
