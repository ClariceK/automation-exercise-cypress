const NAME = '[data-qa="signup-name"]'
const EMAIL_ADRESS = '[data-qa="signup-email"]'
const BOTAO_SIGNUP = 'button[data-qa="signup-button"]'
const GENDER = '#id_gender2'
const PASSWORD = '#password'
const FIRST_NAME = '#first_name'
const LAST_NAME = '#last_name'
const ADDRESS = '#address1'
const COUNTRY = '#country'
const STATE = '#state'
const CITY = '#city'
const ZIPCODE = '#zipcode'
const MOBILENUMBER = '#mobile_number'
const CREATEACCONUT = '[data-qa="create-account"]'
const CONTINUE = '[data-qa="continue-button"]'
const LOGGED_IN = '.shop-menu .navbar-nav a'

const email = `user_${Date.now()}@testesat.com`;

class CadastroCompleto {


    // Preenche o nome e email para cadastro
    preencherNomeEmail(){
        cy.task('salvarEmail', email)
        
      cy.get(NAME).type(Cypress.env('firstName') + ' ' + Cypress.env('lastName'))
      cy.get(EMAIL_ADRESS).type(email)
      cy.get(BOTAO_SIGNUP).click()
      
    }

    preencherDados(){

        cy.get(GENDER).click()
        cy.get(PASSWORD).type(Cypress.env('password'))

        cy.get(FIRST_NAME).type(Cypress.env('firstName'))
        cy.get(LAST_NAME).type(Cypress.env('lastName'))
        
        cy.get(ADDRESS).type(Cypress.env('address'))
        cy.get(COUNTRY).select(Cypress.env('country'))
        cy.get(STATE).type(Cypress.env('state'))
        cy.get(CITY).type(Cypress.env('city'))
        cy.get(ZIPCODE).type(Cypress.env('zipCode'))
        cy.get(MOBILENUMBER).type(Cypress.env('mobileNumber'))

        cy.get(CREATEACCONUT).click()

        cy.get(CONTINUE).should('be.visible').click()
        

    }

    validarLoginSucesso(){
        cy.contains(LOGGED_IN, 'Logged in as ' + Cypress.env('firstName') + ' ' + Cypress.env('lastName'), { timeout: 10000 })
          .should('be.visible')
    }
}

export default new CadastroCompleto()