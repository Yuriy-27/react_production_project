export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileHeader__EditButton').click();
  cy.getByTestId('ProfileCard__firstName').clear().type(firstname);
  cy.getByTestId('ProfileCard__lastName').clear().type(lastname);
  cy.getByTestId('EditableProfileHeader__SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '1',
      firstName: 'Yurii',
      lastName: 'Shchebetun',
      age: 31,
      currency: 'USD',
      country: 'Ukraine',
      city: 'Kyiv',
      user_role: 'admin',
      avatar:
        'https://cdn.dribbble.com/users/187214/screenshots/2011963/media/e97d8786519b74ff46af512f062909f8.png',
      userName: 'Frank Castle',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
