it('GET /api/cards', function() {

  const expectedBody = {
    name: 'new card',
    id: 1,
    created: '',
    deadline: '',
    description: '',
    completed: false,
  }

  cy.api({
    url: `/api/cards/1`
  }).then( ({ body, status }) => {

    expect(status).to.eq(200)

    // expect(body).to.deep.eq(expectedBody)

    expect(body.name).to.eq('new card')
    expect(body.id).to.be.a('number')
    expect(body.created).to.be.a('string')
    expect(body.description).to.be.empty
    expect(body.completed).to.be.false

  })
  
})