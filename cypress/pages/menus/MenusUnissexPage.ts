//ajustar comandos
export class MenusUnissexPage {

    //clicar na opção calcas
    clickCalcas() {
        cy.get('a[title="Calças"]').click();
    }

    //clicar na opção camisetas oficiais masculinas
    clickCamisetasOficiaisMaculinas() {
        cy.get('a[title="CAMISETAS OFICIAIS MASCULINAS"]').click();
    }

    //clicar na opção camisetas casuais
    clickCamisetasCasuais() {
        cy.get('a[title="CAMISETAS CASUAIS"]').click();
    }

    //clicar na opção jaquetas
    clickJaquetas() {
        cy.get('a[title="JAQUETAS"]').click();
    }

    //clicar na opção moletons
    clickMoletons() {
        cy.get('a[title="MOLETONS"]').click();
    }
}