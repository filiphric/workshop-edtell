import cardSchema from '@fixtures/boardSchema.json'
const listSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "boardId": {
      "type": "integer"
    },
    "created": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    }
  },
  "required": [
    "name",
    "boardId",
    "created",
    "id"
  ]
}


it('GET /api/lists', () => {
  
  cy.api({
    method: 'GET',
    url: '/api/lists/1'
  }).its('body')
    .should('jsonSchema', listSchema)
  
});

it('GET /api/cards', () => {

  cy.api({
    method: 'GET',
    url: '/api/cards/1'
  }).its('body')
    .should('jsonSchema', cardSchema)
  
});
