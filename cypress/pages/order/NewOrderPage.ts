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

    clickSecondProduct() {
        cy.get(':nth-child(2) > :nth-child(1) > ul > :nth-child(2) > .listagem-item > .produto-sobrepor').click()
    }

    clickComprar() {
        cy.get('div.principal > .SKU-MB2025-3 > .comprar > .botao').click()
    }

    validateEstoqueDisponivel() {
        cy.contains("Estoque: Disponível")
            .should("be.visible")
    }

    validateEstoqueIndisponivel() {
        cy.get('div.principal > .SKU-MV2025-2 > .comprar > .cor-secundaria > .cor-principal')
            .should("be.visible")
            .and("contain", "Indisponível")   
    }

    clickFinalizarCompra() {
        cy.get('.span12 > .principal').click()
    }

    



}