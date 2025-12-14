export class LoginPage {

    //clicar no botão Minha Conta
    clickMinhaConta() {
        cy.get('.acoes-conta > :nth-child(2) > .cor-secundaria').click()
    }

    //preencher campo Email
    fillEmail(email:string) {
        cy.get('.controls > [name="email"]').type(email)
    }

    //preencher campo Senha
    fillPassword(password:string) {
        cy.get('.controls > [name="senha"]').type(password)
    }

    //clicar no botão Prosseguir
    clickProsseguir() {
        cy.get('.controls > .botao').click()
    }

    //vlidar login com sucesso
    validateLoginSuccess() {
        cy.get('.nome-usuario').should('be.visible')
    }

    //validar email errado
    validateEmailStrong() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    //validar senha errada
    validatePasswordStrong() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    //validar campo email vazio
    validateEmailEmpty() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    }

    //validar campo senha vazio
    validatePasswordEmpty() {
        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.')
    } 
}