/// <reference types="cypress" />

context('Funcionalidade Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, aluno_ebac (não é aluno_ebac? Sair)'
    )
  })

  it('Deve Exibir mensagem de erro ao inserir senha errada', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should(
      'contain',
      'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?'
    )
  })

  it('Deve Exibir mensagem de erro ao inserir usuario errado', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should(
      'contain',
      'Erro: O usuário aluno_ebac@.com não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.'
    )
  })
})
