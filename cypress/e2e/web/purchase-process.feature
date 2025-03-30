Feature: Processo de compra

  Scenario: O usuário finaliza uma compra com sucesso
    Given que o usuário está na página inicial
    When ele seleciona a primeira categoria disponível
    When ele seleciona o primeiro produto da lista disponível para compra
    And ele adiciona o produto ao carrinho    
    When ele prossegue para o checkout
    Then ele deve visualizar a página de pagamento
    Then validação de produtos no carrinho    
