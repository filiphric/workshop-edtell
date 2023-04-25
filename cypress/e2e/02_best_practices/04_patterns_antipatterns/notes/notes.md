# Patterns and antipatterns

There are different ways of designing your test. One of the more popular is the "Arrange - Act - Assert" pattern. This pattern dictates some testing decisions made in future. I personally lean to readability as the most important factor.

For this, it is not a good idea to create conditions in test. This basically avoids the "arrange" part of your test, and makes "act" and "assert" part ambiguous.

## cy.session()
This command will save all the browser data, like cookies, local storage etc. This means that you can load your browser in a desired state. Remember those three parts I mentioned at the beginning? `cy.session()` got you covered with the **browser** part. This means you can create a sequence of commands and save the state of the browser at the end of that sequence:

```js
Cypress.Commands.add('login', (email, password) => {

  cy.session(email, () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type(email)
    
    cy.get('[data-cy="login-password"]')
      .type(password)

    cy.get('[data-cy="login-submit"]')
      .click()

    cy.get('[data-cy="logged-user"]') // make sure that we are on "logged in" screen
      .should('be.visible')

  })

})
```

If you call this custom `cy.login()` command more than once in your spec, the sequence of steps will only get ran twice. As a result, your tests can become way faster!

The best thing - you can do a programmatic login, handle the response yourself (e.g. save it to cookies), and then cache the browser state. That’s some speed right there 🚀

## Useful links
- [cy.session() command documentation](https://docs.cypress.io/api/commands/session)
- [cypress-data-session command that enables you to do even more with session API](https://github.com/bahmutov/cypress-data-session)
- [docs on multi-domain testing in Cypress](https://dev.to/cypress/multi-domain-origin-testing-in-cypress-1aog)
- [recipe for google login](https://docs.cypress.io/guides/end-to-end-testing/google-authentication)
- [my blog post going deeper in explaining google login and how to set it up](https://filiphric.com/google-sign-in-with-cypress)
- [great blogpost on patterns in Cypress that includes usage of Cucumber BDD](https://dev.to/wescopeland/cypress-super-patterns-how-to-elevate-the-quality-of-your-test-suite-1lcf)