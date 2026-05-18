#utf-8
#language: pt

Funcionalidade: Fazer cadastro e compra com sucesso

    Cenario: Fazer cadastro com sucesso
    Dado que acessei o portal automation exercise
    E acessei o login
    Quando Preencher nome e email de cadastro e clicar em Signup
    E preencho o formulario de cadastro e clicar em Create Account
    Entao valido que o login foi realizado com sucesso

    
    Cenario: Capturar detalhes de um produto e adicionar ao carrinho
    Dado que estou na tela inicial
    E localizo o produto Men Tshirt
    Quando clico em View Product
    E capturo o nome e o valor do produto
    Entao adiciono o produto ao carrinho
    E valido a mensagem de sucesso
    E acesso o carrinho
    E valido o nome e o valor do produto no carrinho