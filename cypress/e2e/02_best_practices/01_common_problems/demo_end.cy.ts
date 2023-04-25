it('Targetting improper element', { baseUrl: null }, () => {

  cy.visit('../../../mini-apps/button.html')

  cy.get('button')
    .click()

  cy.get('span')
    .click()

  cy.contains('Click me!')
    .click()

});

it('long command chains', () => {

  cy.visit('/board/1') // action

  cy.get('[data-cy=card]') // query
    .eq(2) // query
    .should('be.visible') // assertion

  cy.get('[data-cy=card-text]') // new query
    .eq(2)
    .should('have.text', 'Juice') // assertion

});

