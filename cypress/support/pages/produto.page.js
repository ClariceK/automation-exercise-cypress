const SIGNUP_LOGIN = 'a[href="/login"]'
const EMAIL_LOGIN = '[data-qa="login-email"]'   
const PASSWORD_LOGIN = '[data-qa="login-password"]'
const BUTTON_LOGIN = '[data-qa="login-button"]'
const BOTAO_HOME = 'a[href="/home"]'
const BOTAO_VIEW_PRODUCT = 'a[href="/product_details/2"]'

class produto {

    // Ir para tela inicial
    telaInicial(){

    cy.visit('/');

    cy.get(SIGNUP_LOGIN).click()

    cy.task('obterEmail').then(email => {
    expect(email).to.not.be.null;
    cy.get(EMAIL_LOGIN).type(email);
    });

    cy.get(PASSWORD_LOGIN).type(Cypress.env('password'))
    cy.get(BUTTON_LOGIN).click()

     cy.url().should('eq', 'https://www.automationexercise.com/')
  }

    produtoMenTshirt(){
    cy.contains(/^Men Tshirt$/).should('be.visible')
    }

    clicarViewProduct(){
        cy.get(BOTAO_VIEW_PRODUCT).click()
    }

    capturarNomeEValorProduto(){

    cy.get('.product-information').within(() => {

    cy.get('h2')
      .invoke('text')
      .then(text => text.trim())
      .as(('nomeProduto'),{timeout: 10000 })
    
    cy.contains(/^Rs\.\s*\d+/)
      .invoke('text')
      .then(text => text.trim())
      .as('valorProduto')

  })

}

}

export default new produto()