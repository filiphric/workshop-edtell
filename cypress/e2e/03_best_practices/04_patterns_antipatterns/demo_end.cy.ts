it('writing conditions in test', { baseUrl: null }, () => {

  cy.setCookie('consent', 'granted')
  cy.visit('../../../mini-apps/cookies.html')

});

it('Test readability', () => {

  cy.visit('/')

  cy.step('create a board')
  cy.get('[data-cy="first-board"]')
    .type('new board{enter}')

  cy.step('add new list')
  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.step('add new card')
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.step('open card detail')
  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('be.visible')

});

describe('session', () => {

  Cypress.Commands.add('login', () => {

    cy.session('user', () => {

      cy.visit('/login')

      cy.get('[data-cy="login-email"]')
        .type('filip@filiphric.sk')

      cy.get('[data-cy="login-password"]')
        .type('Asdf.1234#')

      cy.get('[data-cy="login-submit"]')
        .click()

    }, {
      validate() {
        cy.document()
          .its('cookie')
          .should('contain', 'auth_token')
      }
    })

  })

  it('Logged in user sees private board', () => {

    cy.login()

    cy.visit('/')

    cy.get('[data-cy=board-item]')
      .should('be.visible')

  });

  it('Opens the private board', () => {

    cy.login()

    cy.visit('/')

    cy.get('[data-cy=board-item]')
      .click()

  })

  it('Logs out logged in user', () => {

    cy.login()

    cy.visit('/')

    cy.get('[data-cy="logged-user"]')
      .click()

    cy.contains('Get started!')
      .should('be.visible')

  })

});