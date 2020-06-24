/* global describe ,it , cy */

describe('Petgram', function () {
  it('Para ver si la App funciona', function () {
    cy.visit('/')
  })
  it('Si podemos navegar con la navbar a la home', function () {
    cy.get('nav a').last().click()
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('Formulario de registro en perfil y favs', function () {
    cy.get('nav a').last().click()
    cy.get('form').should('have.length', 2)
  })
})
