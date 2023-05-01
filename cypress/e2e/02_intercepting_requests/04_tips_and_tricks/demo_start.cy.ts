it('reloads boards when it’s taking too long', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards',
    }, (req) => {
      req.reply(res => {
        res.delay = 8000
      })
    }).as('boards')

  cy.visit('/')

  cy.contains('Reload?')
    .click()

  cy.get('[data-cy=board-item]')
    .should('be.visible')
  
});

it('match all "cards" requests', () => {

  cy.intercept({
    method: 'GET',
    url: /cards/
  }).as('cardAction')

  cy.visit('/board/1?card=1')

  cy.wait(['@cardAction', '@cardAction', '@cardAction'])
  
});

it('Tests all cards', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards?listId=1'
  }).as('cards')

  cy.visit('/board/1')

  cy.wait('@cards')
  
});

it('Edit static resources', () => {

  cy.visit('/')
  
});

it('Short form intercepts', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  })

  cy.visit('/')
  
})

it('disable logging', () => {

  cy.visit('/')
  
});