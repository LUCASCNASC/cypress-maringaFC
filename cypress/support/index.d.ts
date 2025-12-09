declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>;
    closeInitialMessage(): Chainable<void>;
    newUser(): Chainable<void>;
    createNewUser(): Chainable<void>;
  }
}
