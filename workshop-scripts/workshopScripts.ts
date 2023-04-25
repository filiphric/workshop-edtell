import { testSetupData } from './testSetupData';

declare global {
  namespace Cypress {
    interface Chainable {
      task(event: 'testSetupData');
    }
  }
}

export const registerWorkshopScripts = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  config.scrollBehavior = false
  on('task', { testSetupData })
  return config
};