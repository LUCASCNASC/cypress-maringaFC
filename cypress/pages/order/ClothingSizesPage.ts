export class ClothingSizesPage {

    //clicar no tamanho PP
    choosePP() {
        cy.get(':nth-child(1) > .atributo-item > span').click()
    }

    //clicar no tamanho P
    chooseP() {
        cy.get(':nth-child(2) > .atributo-item > span').click()
    }

    //clicar no tamanho M
    chooseM() {
        cy.get(':nth-child(3) > .atributo-item > span').click()
    }

    //clicar no tamanho G
    chooseG() {
        cy.get(':nth-child(4) > .atributo-item > span').click()
    }

    //clicar no tamanho GG
    chooseGG() {
        cy.get(':nth-child(5) > .atributo-item > span').click()
    }

    //clicar no tamanho EG
    chooseEG() {
        cy.get(':nth-child(6) > .atributo-item > span').click()
    }

    //clicar no tamanho G1
    chooseG1() {
        cy.get(':nth-child(7) > .atributo-item > span').click()
    }

    //clicar no tamanho G2
    chooseG2() {
        cy.get(':nth-child(8) > .atributo-item > span').click()
    }

    //clicar no tamanho G3
    chooseG3() {
        cy.get(':nth-child(9) > .atributo-item > span').click()
    }
}