// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', () => {
  return false; // impede o teste de falhar quando a aplicação lança erro
});