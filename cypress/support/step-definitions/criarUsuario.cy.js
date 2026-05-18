import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import criarUsuarioApi from "../pages/API/criarUsuario.api"

Given('que faço uma requisição POST para {string}', () => {
criarUsuarioApi.requisicaoCriarUsuario()
})

Then('a resposta deve conter o status 201', () => { 
criarUsuarioApi.validarStatusCriacao()
})

And('valido que o usuário foi criado', () => {
criarUsuarioApi.validarResponse()
})