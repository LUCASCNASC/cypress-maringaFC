import { CustomerData } from '../utils/dataGenerator';
let userData: CustomerData; 

export class NewRegisterPage {

    //clicar no botão Cadastrar
    clickCadastrar() {
        cy.get('fieldset > div > .botao').click();
    }

    //clicar no botão Criar Conta
    clickCriarConta() {
        cy.get('.span3 > .principal').click();
        cy.get('.alert').should('be.visible')
        cy.contains('Cliente criado com sucesso.').should('be.visible')
    }

    //preencher campo Email
    fillEmail(email:string) {
        cy.get('fieldset > div > [name="email"]').type(email)
    }

    //preencher campo Confirmar Email
    fillConfirmEmail() {
        cy.get('.controls > [name="email"]')
            .invoke('val')
            .then((email) => {
                if (typeof email === 'string') {
                    cy.get('[name="confirmacao_email"]').clear().type(email);
                }
            });
    }

    //preencher campo Senha
    fillPassword(password:string) {
        cy.get(':nth-child(1) > [name="senha"]').type(password)
    }

    //preencher campo Confirmar Email
    fillConfirmPassword(password:string) {
        cy.get('[name="confirmacao_senha"]').type(password)
    }

    //preencher campo Nome Completo
    fillNomeCompleto(nomeCompleto:string) {
        cy.get('[name="nome"]').type(nomeCompleto)
    }

    //preencher campo CPF
    fillCPF(cpf:string) {
        cy.get('[name="cpf"]').type(cpf)
    }

    //preencher campo Celular
    fillCelular(celular:string) {
        cy.get('[name="telefone_celular"]').type(celular)
    }

    //preencher campo Telefone Fixo
    fillTelefoneFixo(telefoneFixo:string) {
        cy.get('[name="telefone_principal"]').type(telefoneFixo)
    }

    //selecionar sexo Masculino
    selectSexoMasculino() {
        cy.get('#id_sexo').select('Masculino');
    }

    //selecionar sexo Feminino
    selectSexoFeminino() {
        cy.get('#id_sexo').select('Feminino');
    }

    //preencher campo Data de Nascimento
    fillDataNascimento(dataNascimento:string) {
        cy.get('[name="data_nascimento"]').type(dataNascimento)
    }

    //preencher campo CEP
    fillCEP(cep:string) {
        cy.get('[name="cep"]').type(cep)
    }

    //preencher campo Numero da residencia
    fillNumeroResidencia(numeroResidencia:string) {
        cy.get('[name="numero"]').type(numeroResidencia)
    }

    //preencher campo Complemento
    fillComplemento() {
        cy.get('[name="complemento"]').type('Complemento Teste')
    }

    //preencher campo Referencia
    fillReferencia() {
        cy.get('[name="referencia"]').type('Referencia Teste')
    }  
}