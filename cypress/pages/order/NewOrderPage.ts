export class NewOrderPage {

    clickCarrinhoVazio() {
        cy.get('.span4 > .carrinho > a > .vazio-text').click()
    }

    clickIrAsCompras() {
        cy.get('.caixa-destaque > .botao').click()
        cy.get('.logo > a > img').should("be.visible")
    }
    
    clickFisrtProduct() {
        cy.get(':nth-child(1) > .row-fluid > :nth-child(1) > .listagem-item > .produto-sobrepor').click()
    }

    clickComprar() {
        cy.get('div.principal > .SKU-MT2025-2 > .comprar > .botao').click()
    }

    validateEstoqueDisponivel() {
        cy.get('div.principal > .SKU-MV2025-2 > .comprar > .cor-secundaria > .cor-principal')
            .should("be.visible")
            .and("contain", "Disponível")
    }

    validateEstoqueIndisponivel() {
        cy.get('div.principal > .SKU-MV2025-2 > .comprar > .cor-secundaria > .cor-principal')
            .should("be.visible")
            .and("contain", "Indisponível")   
    }

    



}