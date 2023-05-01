it('reloads boards when it’s taking too long', () => {

  cy.intercept({
      method: 'GET',
      url: '/api/boards',
      times: 1
    }, (req) => {
      req.reply(res => {
        res.delay = 8000
      })
    }).as('boards')

  cy.visit('/')

  cy.contains('Reload?')
    .click()
  
});

it('match all "cards" requests', () => {

  cy.intercept({
    method: 'GET',
    url: /cards/
  }).as('cardAction')

  cy.visit('/board/1?card=1')

  cy.get('@cardAction.all')
    .should('have.length', 3)
  
});

it('tests all cards', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/cards?listId=1'
  }).as('cards')

  cy.visit('/board/1')

  cy.wait('@cards')
    .its('response.body')
    .each((item: Record<string, any>) => {
      expect(item).to.contain.keys(['name', 'completed', 'order', 'id', 'description'])
      expect(item.completed).to.be.a('boolean')
      expect(item.name).to.be.a('string')
    })
  
});

it('Edit static resources', () => {

  cy.intercept({
    resourceType: 'document'
  }, (req) => {
    req.reply(res => {
      res.body += `🐣🐣🐣`
    })
  }).as('html')

  cy.intercept({
    resourceType: 'image'
  }, {
    fixture: 'logo.png'
  }).as('image')

  cy.visit('/')
  
});

it('Short form intercepts', () => {

  cy.intercept('/api/boards')
  cy.intercept('GET', '/api/boards')
  cy.intercept('GET', '/api/boards', [])
  cy.intercept('GET', '/api/boards', (req) => {
    req.query = {
        starred: 'true'
      }
    })
  cy.intercept('/api/boards', (req) => {
    req.query = {
        starred: 'true'
      }
    })

  cy.visit('/')
  
})

it('disable logging', () => {

  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

  cy.visit('/')
  
});