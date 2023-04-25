// challenge #1: this test is flaky and we want to apply a temporary solution to retry the test when it fails
it('tests unstable thing', { retries: 3 }, () => {

  const number = Cypress._.random(2)

  expect(number).to.eq(1)

});

// challenge #2: this test goes way too fast for us to notice what exactly it is doing try to use cy.pause() to see what exactly changes and write an assertion
it('make a change in card', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .first()
    .click()

  cy.get('[data-cy="calendar-dropdown"]')
    .click()
    .pause()

  cy.get('.dp__today')
    .click() // this changes date to today!

  // assertion here
  // cy.get('h2')
  //   .should('contain.text', 'Sun Feb 25 2023')

});