
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'
import * as singleBoardSingleListSingleCard from './fixtures/singleBoardSingleListSingleCard.json'
import * as singleBoardSingleListThreeCardsSingleUser from './fixtures/singleBoardSingleListThreeCardsSingleUser.json'
import * as singleBoardSingleListThreeCardsTwoUsers from './fixtures/singleBoardSingleListThreeCardsTwoUsers.json'
import * as threeBoards from './fixtures/threeBoards.json'
import * as empty from './fixtures/empty.json'

const beforeTestSeeds = {
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_start.cy.ts': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/demo_end.cy.ts': empty,
  'cypress/e2e/01_api_testing/02_chaining_requests/challenge_solution.cy.ts': empty,
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_api_testing/01_basics/demo_end.cy.ts': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/demo_start.cy.ts': threeBoards,
  'cypress/e2e/01_api_testing/01_basics/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/01_basics/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_end.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/demo_start.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/03_complex_responses/challenge_solution.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/01_api_testing/04_json_schemas/demo_end.cy.ts': singleBoardSingleListSingleCard,
  'cypress/e2e/02_best_practices/01_common_problems/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/01_common_problems/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/02_debugging_stabilizing/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/02_debugging_stabilizing/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/02_debugging_stabilizing/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/02_debugging_stabilizing/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/03_waiting/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/03_waiting/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/03_waiting/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/03_waiting/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_best_practices/04_patterns_antipatterns/demo_start.cy.ts': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/02_best_practices/04_patterns_antipatterns/demo_end.cy.ts': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/02_best_practices/04_patterns_antipatterns/challenge_solution.cy.ts': singleBoardSingleListThreeCardsTwoUsers
}

// @ts-ignore
const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

before(() => {

  const dbState = beforeTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})