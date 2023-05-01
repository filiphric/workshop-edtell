# Tips & tricks using cy.intercept()

## Handling Network Delays

When testing network throttling or slow network, you might get into situations where a certain request should only be handled once. The `times` option handles this, and will only math certain request the amout of times you want.

## Waiting for all requests
If you want to wait for all requests that are being made, you can reference all requests by using the following command:

```ts
cy.get('@cardAction.all')
  .should('have.length', 3)
```

## Inspecting and Validating Response Data
Cypress can wait for specific requests, inspect their response data, and perform assertions to validate the data structure and types. In this example, Cypress tests that each card object contains the expected keys and values.

```ts
cy.wait('@cards')
  .its('response.body')
  .each((item: Record<string, any>) => {
    expect(item).to.contain.keys(['name', 'completed', 'order', 'id', 'description'])
    expect(item.completed).to.be.a('boolean')
    expect(item.name).to.be.a('string')
  })
```

## Modifying Static Resources
Cypress enables you to modify the content of static resources, such as documents or images. In this example, `cy.intercept()` is used to append content to the HTML document and replace an image with a fixture.

```ts
cy.intercept({
    resourceType: 'image'
  }, {
    fixture: 'logo.png'
  }).as('image')
```

## Disabling Logging
Cypress allows you to disable logging for specific requests, reducing noise in the test output. In this example, logging is disabled for XMLHttpRequests and fetch requests.

```ts
cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
```