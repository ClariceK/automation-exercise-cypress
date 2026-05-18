import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CadastroCompleto from "../pages/cadastroCompleto.page"

When('Preencher nome e email de cadastro e clicar em Signup', () => {
    CadastroCompleto.preencherNomeEmail()
})

And('preencho o formulario de cadastro e clicar em Create Account', () => {
    CadastroCompleto.preencherDados()
})

Then('valido que o login foi realizado com sucesso', () => {
    CadastroCompleto.validarLoginSucesso()
 })