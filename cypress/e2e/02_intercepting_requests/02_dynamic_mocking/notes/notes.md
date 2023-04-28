# Dynamic mocking
Matched request can be handled not only by using static options, but by dynamically changing different parts using a handler function.

Instead of e.g. static fixture:
```ts
cy.intercept({
  method: 'GET',
  url: '/api/boards'
}, {
  fixture: 'boards.json'
})
```
You can add a dynamic one:
```ts
cy.intercept({
  method: 'GET',
  url: '/api/boards'
}, (req) => {
  // handle request dynamicall
})
```

## Modifying response
You get access to both request and response, which means you can change different attributes of the request that you are sending out, for example you can add a query to your command to get partial data from server:

```ts
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
  // once page loads it will trigger 
  // GET /api/boards?starred=true
  // instead of
  // GET /api/boards

});
```

## Simulating various network situations
Dynamic mocking also enables you to simulate various network situations. In the given example we can see how we can delay a response and test our application in a case when user has slow internet.
```ts
  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }, (req) => {
    req.reply(res => {
      res.delay = 8000
    })
  }).as('boards')
  ```

## Safe mocking
The biggest issue with mocking responses is that they can get outdated without noticing. Instead of statically providing a response, we can first test the response (e.g. if it uses proper schema) and then change the response.

```ts
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
```

## Useful reading
* [docs for .intercept() command](https://docs.cypress.io/api/commands/intercept.html)
* [docs for .as() command](https://docs.cypress.io/api/commands/as.html)
* [docs for .wait() command](https://docs.cypress.io/api/commands/wait.html)
* [my course on testing edge cases using .intercept() command](https://egghead.io/courses/test-network-edge-cases-with-cy-intercept-command-in-cypress-0fd94c68?af=1mdhb0)
* [my article on the topic of intercept](https://egghead.io/blog/intercepting-network-requests-in-cypress)