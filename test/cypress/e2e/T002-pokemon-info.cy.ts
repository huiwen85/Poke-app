describe("pokemon info", () => {
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

    it("should display th pokemon info view ", () => {
      cy.contains("World of Pokémon").should("be.visible");
      cy.get('[data-testid="pokemon-card-1"]', { timeout: 3000 })
        .should("exist")
        .click();
      cy.url().should("include", "/pokemon/bulbasaur");
    });

    it("should contain the correct info of the pokemon", () => {
      cy.get('[data-testid="pokemon-name"]', { timeout: 3000 }).should(
        "contain.text",
        "Bulbasaur",
      );
      cy.get('[data-testid="types"]', { timeout: 3000 })
        .children()
        .should("have.length", 2);
      cy.get('[data-testid="types"]', { timeout: 3000 })
        .children()
        .first()
        .contains("Grass", { matchCase: false });

      cy.get('[data-testid="types"]', { timeout: 3000 })
        .children()
        .eq(1)
        .contains("poison", { matchCase: false });
    });

    it("should contain the correct info of the pokemon table", () => {
      cy.get('[data-testid="table"] thead tr').within(() => {
        cy.contains("th", "ID").should("exist");
        cy.contains("th", "Name").should("exist");
        cy.contains("th", "Types").should("exist");
        cy.contains("th", "Height").should("exist");
        cy.contains("th", "Weight").should("exist");
        cy.contains("th", "Abilities").should("exist");
      });

      cy.get('[data-testid="table"] tbody tr')
        .first()
        .within(() => {
          cy.get("td").eq(0).contains("1"); // ID
          cy.get("td").eq(1).contains("bulbasaur"); // Name
          // Types
          cy.get("td").eq(2).contains("grass, poison", { matchCase: false });
          cy.get("td").eq(3).contains("7"); // Height
          cy.get("td").eq(4).contains("69"); // Weight
          // Abilities
          cy.get("td")
            .eq(5)
            .contains("overgrow, chlorophyll", { matchCase: false });
        });
    });
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
  it("should display th pokemon info view ", () => {
    cy.contains("World of Pokémon").should("be.visible");
    cy.get('[data-testid="pokemon-card-1"]', { timeout: 3000 })
      .should("exist")
      .click();
    cy.url().should("include", "/pokemon/bulbasaur");
  });

  it("should contain the correct info of the pokemon", () => {
    cy.get('[data-testid="pokemon-name"]', { timeout: 3000 }).should(
      "contain.text",
      "Bulbasaur",
    );
    cy.get('[data-testid="types"]', { timeout: 3000 })
      .children()
      .should("have.length", 2);
    cy.get('[data-testid="types"]', { timeout: 3000 })
      .children()
      .first()
      .contains("Grass", { matchCase: false });

    cy.get('[data-testid="types"]', { timeout: 3000 })
      .children()
      .eq(1)
      .contains("poison", { matchCase: false });
  });
  it("should contain the correct info of the pokemon table", () => {
    cy.get('[data-testid="table"] thead tr').within(() => {
      cy.contains("th", "ID").should("exist");
      cy.contains("th", "Name").should("exist");
      cy.contains("th", "Types").should("exist");
      cy.contains("th", "Height").should("exist");
      cy.contains("th", "Weight").should("exist");
      cy.contains("th", "Abilities").should("exist");
    });

    cy.get('[data-testid="table"] tbody tr')
      .first()
      .within(() => {
        cy.get("td").eq(0).contains("1"); // ID
        cy.get("td").eq(1).contains("bulbasaur"); // Name
        // Types
        cy.get("td").eq(2).contains("grass, poison", { matchCase: false });
        cy.get("td").eq(3).contains("7"); // Height
        cy.get("td").eq(4).contains("69"); // Weight
        // Abilities
        cy.get("td")
          .eq(5)
          .contains("overgrow, chlorophyll", { matchCase: false });
      });
  });
});
