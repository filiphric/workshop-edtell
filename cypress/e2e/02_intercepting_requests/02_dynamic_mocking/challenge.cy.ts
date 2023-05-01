// challenge #1: change outgoing request query so that the app will 
// show only the board that has the id 1
it('show only a board with id 1', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boards');

  cy.visit('/');

});

// challenge #2: change outgoing request query so that the app will 
// show only the board that with name "Work stuff"
it('show only a board with name "Things to buy"', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boards');

  cy.visit('/');

});

// challenge #3: change outgoing request query so that the app will 
// show only the boards that have "starred" attribute set to "false"
it('show only a board with starred attribute set to "false"', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boards');

  cy.visit('/');

});

// challenge #4: use setThrottle() function to slow down server’s reply to 0.05 Kbps
it('load boards with a throttled network', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boards');

  cy.visit('/');

});