# Advanced request matching

As applicaitons grow more complex, so do the their APIs. More advanced techniques to match the proper request might be needed. Besides a very handy mini-match method, we have an option to match our resources using regular expressions. For example, we can match two or more methods by using pipe operator in regex:

```ts
cy.intercept({
  method: /GET|POST/,
  url: '/api/boards'
})
```

The same method can be used for matching URL. For example, we can match all the requests that have a digit in the url by using `\d` matcher:

```ts
cy.intercept({
  url: /boards\/\d/
})
```

Aliases are essential part of intercepting workflow and they can be set up dynamically. These two code examples are doing the exact same thing:

```ts
cy.intercept({
  method: 'GET',
  url: '/api/cards?listId=1'
}).as('cards')
```

```ts
cy.intercept({
  method: 'GET',
  url: '/api/cards?listId=*'
}, (req) => {
  req.alias = 'cards'
})
```

This opens doors to more dynamic matching of requests. For example, we can match an API call using the request body:
```ts
 cy.intercept({
  method: 'PATCH',
  url: '/api/cards/*'
}, (req) => {
  if (req.body.hasOwnProperty('description')) {
    req.alias = 'descriptionUpdate'
  }
})
```

## Useful reading
- [Cypress docs on dynamic alias](https://docs.cypress.io/api/commands/intercept#Aliasing-individual-requests)
- [tool for testing regular expressions](https://regexr.com/)