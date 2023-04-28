# Waiting and how to avoid it
Modern websites have a lot going on. This means that when we want to test a modern website, we need to make sure to syncronize our testing with changes that happen in UI.

Cypress includes automatic retry-ability that will make sure that dynamic changes in page are correctly reflected. Moreover, whenever we are dealing with flaky environment, there are ways to retry the whole test. We can define retry for a whole test and we can define whether this retry should ojnly be done in `runMode`.

If an application is particularly slow, we can change the default timeout and increase the time that Cypress will take to retry the test. This timeouts can be changed per test, globally, or per command. Moreover, there are different categories of timeouts that deal with querying, opening a page, running a task or waiting for API response. All are [described in more detail in the documentation](https://docs.cypress.io/guides/references/configuration#Timeouts). 

## Useful links
- [my blogpost on topic of waiting](https://filiphric.com/waiting-in-cypress-and-how-to-avoid-it)
- [Cypress docs on retry-ability](https://docs.cypress.io/guides/core-concepts/retry-ability#Commands-Queries-and-Assertions)