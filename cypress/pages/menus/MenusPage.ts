export class MenusPage {

    clickMasculino() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-6625401 > [href="https://store.maringafc.com/publicomasculino"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "MASCULINO")
            .and("be.visible")
    }

    clickUnissex() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-17553089 > [href="https://store.maringafc.com/unissex"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "UNISSEX")
            .and("be.visible")
    }

    clickFeminino() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-8355122 > [href="https://store.maringafc.com/linha-feminina"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "FEMININO")
            .and("be.visible")
    }

    clickAcessoriosMFC() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-6625289 > [href="https://store.maringafc.com/acessorios"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "ACESSÓRIOS MFC")
            .and("be.visible")
    }

    clickInfantil() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-3977525 > [href="https://store.maringafc.com/linha-infantil"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "INFANTIL")
            .and("be.visible")
    }

    clickPets() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-23808684 > a > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "PETS")
            .and("be.visible")
    }

    clickOutros() {
        cy.get('.conteiner > .menu > .nivel-um > .categoria-id-23466266 > [href="https://store.maringafc.com/outros"] > .titulo').click()
        cy.get('.breadcrumbs > ul > :nth-child(1) > a')
            .should("contain", "Página inicial")
            .and("be.visible")
        cy.get('.breadcrumbs > ul > :nth-child(2) > .cor-secundaria')
            .should("contain", "OUTROS")
            .and("be.visible")
    }
}