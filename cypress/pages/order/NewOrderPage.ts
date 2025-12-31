export class NewOrderPage {

    //clica no botão Carrinho Vazin
    clickCarrinhoVazio() {
        cy.get('.span4 > .carrinho > a > .vazio-text').click();
    }

    //clica no botão Ir as Compras
    clickIrAsCompras() {
        cy.get('.caixa-destaque > .botao').click();
        cy.get('.logo > a > img').should("be.visible")
    }
    
    //adicionar primeiro produto ao carrinho
    clickFisrtProduct() {
        cy.get(':nth-child(1) > .row-fluid > :nth-child(1) > .listagem-item > .produto-sobrepor').click();
    }

    //adicionar segundo produto ao carrinho
    clickSecondProduct() {
        cy.get(':nth-child(2) > :nth-child(1) > ul > :nth-child(2) > .listagem-item > .produto-sobrepor').click();
    }

    //clica no botão Comprar
    clickComprar() {
        cy.get('div.principal > .SKU-MB2025-3 > .comprar > .botao').click();
    }

    //validar estoque disponível
    validateEstoqueDisponivel() {
        cy.contains("Estoque: Disponível")
            .should("be.visible")
    }

    //validar estoque indisponível
    validateEstoqueIndisponivel() {
        cy.get('div.principal > .SKU-MV2025-2 > .comprar > .cor-secundaria > .cor-principal')
            .should("be.visible")
            .and("contain", "Indisponível")   
    }

    //clica no botão Finalizar Compra
    clickFinalizarCompra() {
        cy.get('.span12 > .principal').click();
    }
}