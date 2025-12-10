//ajustar comandos
export class MenusUnissexPage {

    clickCalcas() {
        cy.get('a[title="Calças"]').click();
    }

    clickCamisetasOficiaisMaculinas() {
        cy.get('a[title="CAMISETAS OFICIAIS MASCULINAS"]').click();
    }

    clickCamisetasCasuais() {
        cy.get('a[title="CAMISETAS CASUAIS"]').click();
    }

    clickJaquetas() {
        cy.get('a[title="JAQUETAS"]').click();
    }

    clickMoletons() {
        cy.get('a[title="MOLETONS"]').click();
    }
}