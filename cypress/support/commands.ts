/// <reference types="cypress" />


import users from '../support/users.json';

Cypress.Commands.add("login", () => {
  cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()
  cy.get('.controls > [name="email"]').type(users.validUser.email)
  cy.get('.controls > [name="senha"]').type(users.validUser.password)
  cy.get('.controls > .botao').click()
  cy.get('.nome-usuario').should('be.visible')
});

//comando para criar um novo usuário
Cypress.Commands.add("newUser", () => {
  cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()
  cy.get('.controls > [name="email"]').type(users.validUser.email)
  cy.get('.controls > [name="senha"]').type(users.validUser.password)
  cy.get('.controls > .botao').click()
  cy.get('.nome-usuario').should('be.visible')
});

//comando para fechar a mensagem inicial, quando ela aparece.
Cypress.Commands.add("closeInitialMessage", () => {
  cy.get('.fancybox-skin', { timeout: 13000 }) // espera até 10s aparecer
      .should('be.visible')                      // garante que está visível
      .within(() => {
        cy.get('.fancybox-close').click();       // clica no botão de fechar
      });
});

// comando para criar um novo usuário
import { faker } from '@faker-js/faker';
import { CustomerData } from '../utils/dataGenerator';
import { generateCPF } from '../support/generateCPF';
import { generateCEP } from '../support/generateCEP';

let userData: CustomerData;

Cypress.Commands.add("createNewUser", () => {

  // ====== GERAÇÃO DE DADOS ======
  const email = faker.internet.email();
  const password = faker.internet.password();
  const nomeCompleto = faker.person.fullName();
  const celular = faker.helpers.replaceSymbols('(44) 9####-####');
  const telefoneFixo = faker.helpers.replaceSymbols('(44) 3###-####');

  const data = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
  const dataNascimento = data.toLocaleDateString('pt-BR');

  const cpf = generateCPF();
  const CEP = generateCEP();

  // ====== CADASTRO NA TELA ======

  cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()

  cy.get('.span8[name="email"]').type(email);

  cy.get('fieldset > div > .botao').click()

  cy.get('.controls > [name="email"]')
    .invoke('val')
    .then((email) => {
      if (typeof email === 'string') {
        cy.get('[name="confirmacao_email"]').clear().type(email);
      }
    });

  cy.get(':nth-child(1) > [name="senha"]').type(password);
  cy.get('[name="confirmacao_senha"]').type(password);

  cy.get('[name="nome"]').type(nomeCompleto);
  cy.get('[name="cpf"]').type(cpf);
  cy.get('[name="telefone_celular"]').type(celular);
  cy.get('[name="telefone_principal"]').type(telefoneFixo);
  cy.get('#id_sexo').select('Masculino');
  cy.get('[name="data_nascimento"]').type(dataNascimento);

  cy.get('[name="cep"]').type(CEP);
  cy.get('[name="complemento"]').type('Complemento Teste');
  cy.get('[name="referencia"]').type('Referencia Teste');

  cy.get('.span3 > .principal').click();
  cy.get('.alert').should('be.visible');
  cy.contains('Cliente criado com sucesso.').should('be.visible');
});