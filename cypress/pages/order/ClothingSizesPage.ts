export class ClothingSizesPage {

    choosePP() {
        cy.get(':nth-child(1) > .atributo-item > span').click()
    }

    chooseP() {
        cy.get(':nth-child(2) > .atributo-item > span').click()
    }

    chooseM() {
        cy.get(':nth-child(3) > .atributo-item > span').click()
    }

    chooseG() {
        cy.get(':nth-child(4) > .atributo-item > span').click()
    }

    chooseGG() {
        cy.get(':nth-child(5) > .atributo-item > span').click()
    }

    chooseEG() {
        cy.get(':nth-child(6) > .atributo-item > span').click()
    }

    chooseG1() {
        cy.get(':nth-child(7) > .atributo-item > span').click()
    }

    chooseG2() {
        cy.get(':nth-child(8) > .atributo-item > span').click()
    }

    chooseG3() {
        cy.get(':nth-child(9) > .atributo-item > span').click()
    }
}