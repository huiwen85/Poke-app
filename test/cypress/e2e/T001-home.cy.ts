describe("home", () => {
  context("mobile", () => {
    before(() => {
      cy.fixture("config.json")
        .as("config")
        .then((data) => {
          Cypress.config("viewportWidth", data.mobileDimensionX);
          Cypress.config("viewportHeight", data.mobileDimensionY);
        });
      cy.visitHome();
    });

    it("should display the home view ", () => {
      cy.contains("World of Pokémon").should("be.visible");
    });

    it("should display the home view with pokemons", () => {
      cy.contains("Bulbasaur").should("be.visible");
      cy.contains("Charmander").should("be.visible");
    });
  });

  context("desktop", () => {
    before(() => {
      cy.fixture("config.json")
        .as("config")
        .then((data) => {
          Cypress.config("viewportWidth", data.desktopDimensionX);
          Cypress.config("viewportHeight", data.desktopDimensionY);
        });
      cy.visitHome();
    });

    it("should display the home view", () => {
      cy.contains("World of Pokémon").should("be.visible");
    });

    it("should display the home view with pokemons", () => {
      cy.contains("Bulbasaur").should("be.visible");
      cy.contains("Charmander").should("be.visible");
    });
  });
});
