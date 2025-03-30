Feature: Testar API de busca de produtos

  Scenario: Buscar todos os produtose e usar o nome do primeiro produto para buscar especificamente
    Given que eu tenho acesso à API de produtos
    When eu faço a requisição para buscar um produto por nome
    And a resposta deve conter somente um produto correspondente
    And eu valido se o status code da requisição é 200

  Scenario: Atualizar a imagem de um produto com o usuário ADMIN
    Given que eu faço login com o usuário administrador
    When eu atualizo a imagem do produto 
    