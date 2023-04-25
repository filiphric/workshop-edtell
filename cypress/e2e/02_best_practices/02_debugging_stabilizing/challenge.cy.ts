// challenge #1: this test is flaky and we want to apply a temporary solution to retry the test when it fails
it('tests unstable thing', () => {

  const number = Cypress._.random(3)

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

  cy.get('.dp__today')
    .click()

});