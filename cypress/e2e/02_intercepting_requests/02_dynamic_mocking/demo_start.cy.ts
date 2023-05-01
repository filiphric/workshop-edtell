it('show only starred boards', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boards')

  cy.visit('/')

});

it('reloads boards when it’s taking too long', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boards')

  cy.visit('/')
  
});

it('partial mocking', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards/*',
  }, {
    fixture: 'card.json'
  }).as('cardDetail')

  cy.visit('/board/1?card=1')
  
});