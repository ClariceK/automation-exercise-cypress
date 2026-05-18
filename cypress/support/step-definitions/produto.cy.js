import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Produto from "../pages/produto.page"
import Carrinho from "../pages/carrinho.page"

Given('que estou na tela inicial' , () => {
    Produto.telaInicial()
})

And('localizo o produto Men Tshirt', () => {
    Produto.produtoMenTshirt()
})

When('clico em View Product', () => {
    Produto.clicarViewProduct()
})

And('capturo o nome e o valor do produto', () => {
    Produto.capturarNomeEValorProduto()
})

Then('adiciono o produto ao carrinho', () => {
    Carrinho.adicionarAoCarrinho()
})

And('valido a mensagem de sucesso', () => {
    Carrinho.validarMensagemSucesso()
})

And('acesso o carrinho', () => {
    Carrinho.acessarCarrinho()
})  

And('valido o nome e o valor do produto no carrinho', () => {
    Carrinho.validarNomeEValorProdutoNoCarrinho()
})