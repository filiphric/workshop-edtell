it('Waiting for elements to appear (API method)', () => {

  cy.intercept('GET', /cards/g).as('cards')

  cy.visit('/board/1')

  cy.wait('@cards')

  cy.get('[data-cy=card]')
  // .should('not.exist')

});

it('Waiting for elements to appear (UI method)', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 5)

});