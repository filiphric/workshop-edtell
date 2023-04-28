import { cardsLoadRandomly } from "@scripts/evilCode";

it('pausing a test', () => {

  cardsLoadRandomly(1000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .first()
    .click()

  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', 'Milk')

});

it('console.log()', () => {

  cy.request('POST', '/api/reset')

  // send request
  cy.request('POST', '/api/boards', { name: 'new board' })
    .as('boardRequest')

  // intercept request in UI
  cy.intercept('GET', '/api/boards')
    .as('boardIntercept')

  // API test
  cy.get('@boardRequest')
    .then((response) => {
      // @ts-ignore
      expect(response.body.name).to.eq('new board')
    })

  // UI test  
  cy.visit('/')
  cy.wait('@boardIntercept')
    .then(({ response }) => {
      expect(response.body.name).to.eq('new board')
    })

});

it('retries', () => {

  const number = Cypress._.random(10)

  expect(number).to.be.greaterThan(1)

});