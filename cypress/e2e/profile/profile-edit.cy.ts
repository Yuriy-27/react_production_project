let profileId: string;

describe('User goes to the profile page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login().then((user) => {
      profileId = user.id;
      cy.visit(`/profile/${user.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('passes', () => {
    cy.getByTestId('ProfileCard__firstName').should('have.value', 'Yurii');
  });
  it('Update profile', () => {
    cy.updateProfile('Yuriy', 'Test');
    cy.getByTestId('ProfileCard__firstName').should('have.value', 'Yuriy');
    cy.getByTestId('ProfileCard__lastName').should('have.value', 'Test');
  });
});
