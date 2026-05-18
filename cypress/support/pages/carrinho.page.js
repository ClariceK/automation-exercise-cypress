const ADICIONAR_CARRINHO = '.btn.btn-default.cart'
const MODAL_SUCESSO = '.modal-content'
const MENSAGEM_SUCESSO = '.text-center'
const ACESSAR_CARRINHO = 'a[href="/view_cart"]'
const NOME_PRODUTO_CARRINHO = 'h4 > a'
const VALOR_PRODUTO_CARRINHO = '.cart_price > p'

class carrinho {

    adicionarAoCarrinho(){
        cy.get(ADICIONAR_CARRINHO).click();

    }

    validarMensagemSucesso(){
    cy.contains(MENSAGEM_SUCESSO, 'Your product has been added to cart.', { timeout: 10000 }).should('be.visible')
    
}

    acessarCarrinho(){        
    cy.get(MODAL_SUCESSO)
      .should('be.visible')
      .within(() => {
        cy.contains('View Cart').click()
        cy.location('pathname').should('eq', '/view_cart')
        })
    }

    validarNomeEValorProdutoNoCarrinho(){
       
    cy.get('@nomeProduto').then(nomeEsperado => {
    cy.get('@valorProduto').then(valorEsperado => {

      cy.get('.cart_info').within(() => {
        cy.get(NOME_PRODUTO_CARRINHO)
          .should('contain.text', nomeEsperado)

        cy.get(VALOR_PRODUTO_CARRINHO)
          .should('contain.text', valorEsperado)
      })

    })
  })

    }

}

export default new carrinho()