# Debugging and stabilization of tests
Debugging is incredibly easy thanks to the fact that Cypress runs right inside browser. Besides using the timeline, there are multiple other ways of how you can debug your tests.

## Cypress retries
Cypress allows you to retry your tests. You can set this up in configuration and define number of retries for `openMode` or for `runMode`. This is a good quickfix for tests that might be tricky to debug or stabilizing them steals time from company priorities.

## cy.pause()
Pausing a test can give you a good insight into what the test is doing, especially if the execution of the test is too fast. This command will only pause your test in `openMode`, so you don’t need to worry about accidentally commiting the command and running it on CI.

## console.log()
Sometimes, the most simple solutions can be the most powerful. `console.log()` gives us insight into what information was returned

## Cypress._.times()
Flaky tests can be especially annoying when they happen very rarely. In these cases, you can run your test through a loop that will help you determine the failure.

## Useful links
- [great blog on code smells and how you can identify them with Cypress](https://codingitwrong.com/2020/10/09/identifying-code-smells-in-cypress.html#:~:text=The%20code%20smells%20are%3A,Impatient%20Test)
- [docs on cypress retries](https://docs.cypress.io/guides/guides/test-retries)