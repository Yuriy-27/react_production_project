describe('Routing', () => {
  describe('Unauthorized user', () => {
    it('Main page', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Profile page', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Not found page ', () => {
      cy.visit('/fasfasfasf');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('Authorized user', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Profile page', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });
    it('Articles page', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
