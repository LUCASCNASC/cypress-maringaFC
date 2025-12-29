//ajustar comandos
export class MenusMasculinoPage {

    //clicar na opção Calças
    clickCalcas() {
        cy.get('a[title="Calças"]').click();;
    }

    //clicar na opção Camisetas Oficiais Masculinas
    clickCamisetasOficiaisMaculinas() {
        cy.get('a[title="CAMISETAS OFICIAIS MASCULINAS"]').click();;
    }

    //clicar na opção Camisetas Casuais
    clickCamisetasCasuais() {
        cy.get('a[title="CAMISETAS CASUAIS"]').click();;
    }

    //clicar na opção Jaquetas
    clickJaquetas() {
        cy.get('a[title="JAQUETAS"]').click();;
    }

    //clicar na opção Moletons
    clickMoletons() {
        cy.get('a[title="MOLETONS"]').click();;
    }
}