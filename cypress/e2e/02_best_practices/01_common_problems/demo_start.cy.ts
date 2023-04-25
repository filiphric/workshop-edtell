it('Targetting improper element', { baseUrl: null }, () => {

  cy.visit('../../../mini-apps/button.html')

  // cy.get('button')
  //   .click()

});

it('long command chains', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(2)
    .should('be.visible')
    .get('[data-cy=card-text]')
    .should('have.text', 'Juice')

});
