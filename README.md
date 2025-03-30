# Inmetrics Test - Testes de Web e API com Cypress e Cucumber

Este projeto contém implementações de testes automatizados para o [Advantage Online Shopping](https://www.advantageonlineshopping.com/) utilizando **Cypress** para os testes de interface (Web) e **Cucumber** para a definição de testes baseados em comportamento (BDD).

## Descrição

O objetivo deste repositório é fornecer uma base de testes automatizados para a aplicação *Advantage Online Shopping* nas vertentes de **Web** e **API**. O projeto utiliza o Cypress para a automação de testes de navegação na interface e o Cucumber para descrever os testes de forma legível, utilizando a linguagem Gherkin.

## Tecnologias e Dependências

Este projeto utiliza as seguintes ferramentas:

- **Cypress**: Framework para testes end-to-end.
- **Cucumber**: Para testes baseados em comportamento, usando a linguagem Gherkin.
- **Webpack**: Para empacotar o código de teste.

### Dependências do projeto:

- `@badeball/cypress-cucumber-preprocessor` v16.0.1 (para integrar o Cypress com o Cucumber)
- `@cypress/webpack-preprocessor` v5.17.0 (necessário para trabalhar com o Webpack)
- `cypress` v12.17.3 (versão do Cypress)
- `webpack` v5.88.2 (versão do Webpack)
- `webpack-cli` v5.1.4 (versão do Webpack CLI)

**Certifique-se de instalar as versões corretas das dependências para evitar problemas.**

## Instalação

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/EduAndrade1979/advantage-inmetrics-tests.git
    cd advantage-inmetrics-tests
    ```

2. **Instale as dependências**:

    Para garantir que o projeto funcione corretamente, é necessário instalar as versões específicas das dependências. Para isso, execute o comando abaixo para instalar o Cypress, Cucumber e as demais dependências:

    ```bash
    npm install
    ```

    Caso você não tenha o `npm` ou `node.js` instalado, acesse [nodejs.org](https://nodejs.org/) para obter as versões mais recentes.

### Versões Exatas:

- **Cypress**: v12.17.3
  - Instalação:
    ```bash
    npm install cypress@12.17.3
    ```
  - [Link para o Cypress v12.17.3 no npm](https://www.npmjs.com/package/cypress/v/12.17.3)

- **Cucumber Preprocessor**: v16.0.1
  - Instalação:
    ```bash
    npm install @badeball/cypress-cucumber-preprocessor@16.0.1
    ```
  - [Link para o Cucumber Preprocessor v16.0.1 no npm](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor/v/16.0.1)

- **Webpack**: v5.88.2
  - Instalação:
    ```bash
    npm install webpack@5.88.2
    ```
  - [Link para o Webpack v5.88.2 no npm](https://www.npmjs.com/package/webpack/v/5.88.2)

- **Webpack CLI**: v5.1.4
  - Instalação:
    ```bash
    npm install webpack-cli@5.1.4
    ```
  - [Link para o Webpack CLI v5.1.4 no npm](https://www.npmjs.com/package/webpack-cli/v/5.1.4)


Essas versões são específicas para garantir que o projeto funcione corretamente. Evite atualizar as dependências para versões mais recentes sem testar antes.

## Executando os Testes

### Testes de Web (Cypress)

Para rodar os testes de interface (web) do projeto, use o seguinte comando:

```bash
npx cypress open
