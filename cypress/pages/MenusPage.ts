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
}