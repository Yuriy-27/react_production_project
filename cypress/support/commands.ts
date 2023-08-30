// import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { login } from './commands/login';
// import { IUser } from 'src/entities/User';

Cypress.Commands.add('login', login);

// export const getByTestId = (testId: string) => {
//   return cy.get(selectByTestId(testId));
// };

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>;
      // getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
