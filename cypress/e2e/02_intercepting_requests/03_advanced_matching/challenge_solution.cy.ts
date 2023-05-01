// challenge #1: there are 3 API calls to the "cards" resource, but they 
// have sligthly different URLs. Change the matcher method so that it 
// matches them all
it('match all "cards" requests', () => {

  cy.intercept({
    method: 'GET',
    url: /cards/
  }).as('cardAction')

  cy.visit('/board/1?card=1')

  cy.wait(['@cardAction', '@cardAction', '@cardAction'])
  
});

// challenge #2: the current intercept matches only one of the
// API calls to /api/cards/* URLs. However, in our test, there are
// two calls to this URL, only with different methods
// rewrite the command to match both DELETE and GET methods
// using regex (or any other solution)
it('match GET and DELETE methods', () => {

  cy.intercept({
    method: /GET|DELETE/,
    url: '/api/cards/*'
  }).as('cardAction')
  
  cy.visit('/board/1?card=1')

  cy.get('[data-cy="card-detail-delete"]')
    .click()
  
  cy.wait(['@cardAction', '@cardAction'])

});

// challenge #3: refactor this current intercept to instead of using
// cy.as() command, it will use dynamic alias
it('dynamic alias', () => {

  cy.intercept({
    method: 'GET',
    url: /cards/
  }, (req) => {
    req.alias = 'cards'
  })

  cy.visit('/board/1')

  cy.wait(['@cards', '@cards'])
  
});

// challenge #4: match the request that has "completed" in the body
it('matching request using request body', () => {

  cy.intercept({
    method: 'PATCH',
    url: '/api/cards/*'
  }, (req) => {
    if (req.body.hasOwnProperty('completed')) {
      req.alias = 'cardUpdate'
    }
  })

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="card-detail"]')
    .find('[data-cy="card-checkbox"]')
    .check()

  cy.get('[data-cy="card-description"]')
    .type('low fat{enter}')

  cy.wait('@cardUpdate')
    .its('response.body.completed')
    .should('be.true')
  
});