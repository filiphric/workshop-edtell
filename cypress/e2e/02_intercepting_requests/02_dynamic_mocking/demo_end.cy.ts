import card from '@fixtures/card.json'
import cardSchema from '@fixtures/cardSchema.json'

it('show only starred boards', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }, (req) => {
    req.query = {
      starred: 'true'
    }
  }).as('boards');

  cy.visit('/');

});

it('reloads boards when it’s taking too long', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards',
    }, (req) => {
      req.reply(res => {
        res.delay = 8000
      })
    }).as('boards')

  cy.visit('/')

  cy.contains('Reload?')
    .should('be.visible')
  
});

it('partial mocking', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards/*',
  }, (req) => {
    req.reply(res => {
      expect(res.body.deadline).to.be.a('string')
      expect(res.body).to.jsonSchema(cardSchema)
      // expect(res.body.deadline).to.be.a(typeof card.deadline)
      res.body = card
      return res
    })
  }).as('cardDetail')

  cy.visit('/board/1?card=1')
  
});