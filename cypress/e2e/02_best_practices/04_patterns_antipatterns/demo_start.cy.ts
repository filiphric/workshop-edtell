
it('Writing conditions in test', { baseUrl: null }, () => {

  cy.visit('../../../mini-apps/cookies.html')

  cy.get('body').then((body) => {

    const cookieMessage = body.find('#cookieMessage')

    if (cookieMessage.length) {
      cy.contains('Accept cookies')
        .click()
    }

  })

});

it('Ignoring readability in your tests', () => {

  cy.visit('/')

  cy.get('[data-cy="first-board"]')
    .type('new board{enter}')

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('not.be.visible')

});

describe('session', () => {

  Cypress.Commands.add('login', () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type('filip@filiphric.sk')

    cy.get('[data-cy="login-password"]')
      .type('Asdf.1234#')

    cy.get('[data-cy="login-submit"]')
      .click()

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