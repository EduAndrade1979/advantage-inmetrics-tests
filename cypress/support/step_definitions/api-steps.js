import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import user from '../../support/user-data';
const baseUrl = Cypress.config('baseUrl');
const { username, password, email, userId } = user;
let firstProduct;
let firstProductName;
let productSearchedByName;
let token;

Given('que eu tenho acesso à API de produtos', () => {
  cy.request({
    method: 'GET',
    url: `${baseUrl}/catalog/api/v1/products`,
  }).then((response) => {
    expect(response.status).to.equal(200);
    firstProduct = response.body.products[0];
    firstProductName = firstProduct.productName;
    cy.log(firstProductName);
  });
});

When('eu faço a requisição para buscar um produto por nome', () => {
  cy.request({
    method: 'GET',
    url: `${baseUrl}/catalog/api/v1/products/search?name=${firstProduct.productName}`,
  }).then((response) => {
    expect(response.status).to.equal(200);
    productSearchedByName = response;
  });
});

Then('a resposta deve conter somente um produto correspondente', () => {
  let products = productSearchedByName.body[0].products;
  expect(products).to.have.length(1);
  expect(products[0].productName).to.include(firstProductName);
});

Then('eu valido se o status code da requisição é 200', () => {
  expect(productSearchedByName.status).to.eq(200);
});

Given('que eu faço login com o usuário administrador', () => {
  cy.request({
    method: 'POST',
    url: `${baseUrl}/accountservice/accountrest/api/v1/login`,
    body: {
      email: user.email,
      loginPassword: user.password,
      loginUser: user.username,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.log(response.body.statusMessage.token);
    token = response.body.statusMessage.token;
  });
});

When('eu atualizo a imagem do produto', () => {
  const productId = firstProduct.productId;
  const source = 'advantage-product';
  const color = 'red';

  cy.fixture('fone-de-ouvido.jpg', 'base64').then((fileContent) => {
    const fileBlob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
    const formData = new FormData();

    formData.append('file', fileBlob, 'fone-de-ouvido.jpg');
    cy.request({
      method: 'POST',
      url: `${baseUrl}/catalog/api/v1/product/image/${user.userId}/${source}/${color}?product_id=${productId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data',
      },
      body: formData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.log(`Status: ${response.status}`);
    });
  });
});
