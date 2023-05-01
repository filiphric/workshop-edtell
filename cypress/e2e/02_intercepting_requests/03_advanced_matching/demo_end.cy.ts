const { _ } = Cypress
it('matching request using regex', () => {

  cy.intercept({
    method: 'GET',
    // url: /listId=\d/,
    query: {
      listId: /\d/
    }
  }).as('cards')

  cy.visit('/board/1')

  cy.wait(['@cards', '@cards'])
  
});

it('matching request dynamically', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards?listId=*'
  }, (req) => {
    // alias not shown in timeline: https://github.com/cypress-io/cypress/issues/17819
    req.alias = 'cards'
  })

  cy.visit('/board/1')

  cy.wait(['@cards', '@cards'])
  
});

it('matching request using request body', () => {

  cy.intercept({
    method: 'PATCH',
    url: '/api/cards/*'
  }, (req) => {
    if (req.body.hasOwnProperty('description')) {
      req.alias = 'descriptionUpdate'
    }
  })

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="card-detail"]')
    .find('[data-cy="card-checkbox"]')
    .check()

  cy.get('[data-cy="card-description"]')
    .type('low fat{enter}')

  cy.wait('@descriptionUpdate')
    .its('response.body.description')
    .should('eq', 'low fat')
  
});