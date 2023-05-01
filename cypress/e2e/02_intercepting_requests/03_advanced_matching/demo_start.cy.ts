it.only('matching request using regex', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards?listId=*',
  }).as('cards')

  cy.visit('/board/1')

  cy.wait(['@cards', '@cards'])
  
});

it('matching request dynamically', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards?listId=*'
  }).as('cards')

  cy.visit('/board/1')

  cy.wait(['@cards', '@cards'])
  
});

it('matching certain request dynamically', () => {

  cy.intercept({
    method: 'PATCH',
    url: '/api/cards/*'
  }).as('cardUpdate')

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="card-detail"]')
    .find('[data-cy="card-checkbox"]')
    .check()

  cy.get('[data-cy="card-description"]')
    .type('low fat{enter}')

  cy.wait('@cardUpdate')
    .its('response.body.description')
    .should('eq', 'low fat')
  
});