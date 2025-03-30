import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl');
let productCount = 0;

Given('que o usuário está na página inicial', () => {
  cy.visit(baseUrl);
});

When('ele seleciona a primeira categoria disponível', () => {
  cy.get('.categoryCell', { timeout: 10000 }).first().click();
});

When(
  'ele seleciona o primeiro produto da lista disponível para compra',
  function () {
    cy.get(
      '[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)'
    ).click();

    productCount += 1;
  }
);

When('ele adiciona o produto ao carrinho', () => {
  cy.get("[name='save_to_cart']").should('be.visible').click();
});

When('ele prossegue para o checkout', () => {
  cy.get('[name="check_out_btn"]').click();
});

Then('ele deve visualizar a página de pagamento', () => {
  cy.url().should('include', '/login');
});

Then('validação de produtos no carrinho', () => {
  cy.get('table tbody tr')
    .should('have.length', productCount)
    .each(($row) => {
      cy.wrap($row).find('h3').should('not.be.empty');
      cy.wrap($row).find('.price').should('not.be.empty');
    })
    .then((items) => {
      expect(items.length).to.eq(productCount);
      cy.log(`Carrinho contém ${items.length} item(s)`);
    });
});
