import '@scripts/testSetupHook.ts'
import '@scripts/infoCommand.ts'
import './utils/requestOverwrite'
import 'cypress-plugin-api'
import 'cypress-plugin-steps'
chai.use(require('chai-json-schema'));

