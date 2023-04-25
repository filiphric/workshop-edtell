import { cardsLoadSlowly } from "@scripts/evilCode";

it('Waiting for elements to appear (API method)', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

it('Waiting for elements to appear (UI method)', () => {

  cardsLoadSlowly(10000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 5)

});