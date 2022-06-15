const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {
  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, aluno_ebac (não é aluno_ebac? Sair)'
    )
  })

  it('Deve fazer login com sucesso Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, aluno_ebac (não é aluno_ebac? Sair)'
    )
  })
  it('Deve Exibir mensagem de erro ao inserir senha errada', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should(
      'contain',
      'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?'
    )
  })

  it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil.json').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, { log: false })
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
        'contain',
        'Olá, aluno_ebac (não é aluno_ebac? Sair'
      )
    })
  })

  it('Deve Exibir mensagem de erro ao inserir usuario errado', () => {
    cy.get('#username').type('aluno_ebac@.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should(
      'contain',
      'Erro: O usuário aluno_ebac@.com não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.'
    )
  })
})
