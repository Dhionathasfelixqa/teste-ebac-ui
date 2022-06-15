describe('funcionalidade pagina de produtos', () => {
  beforeEach(() => {
    cy.visit('/produtos')
  })

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"')
      .contains('Agasalho jhony quest')
      .click()
  })

  it.only('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 4

    cy.get('[class="product-block grid"').first().click()

    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should(
      'contain',
      quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.'
    )
  })
})
