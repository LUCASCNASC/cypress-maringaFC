export class GeneralPage {

    //clicar no logo MFC Store
    clickLogoMFCStore() {
        cy.get('.logo > a > img').click();
    }
}