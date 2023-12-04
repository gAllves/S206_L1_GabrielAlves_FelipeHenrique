Feature: Testando API Pokemon

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno pokemon/clefairy
    Given url url_base
    And path 'pokemon/clefairy'
    When method get
    Then status 200
    And match response.name == 'clefairy'

Scenario: Testando o tipo dos elementos do array de response pokemon/clefairy
    Given url url_base
    And path 'pokemon/clefairy'
    When method get
    Then status 200
    And match $.name == '#string'
    And match $.id == '#number'
    And match $.base_experience == '#number'
    And match $.height == '#number'
    And match $.is_default == '#boolean'

Scenario: Testando retorno de moves entrando em um dos elementos do array de response pokemon/clefairy
    Given url url_base
    And path 'pokemon/clefairy'
    When method get
    Then status 200
    And def move = $.moves[0].move.url
    And url move 
    When method get
    Then status 200
    And match $.name == "pound"

Scenario: Testando retorno pokemon/pikachu com informações invalidas 
    Given url url_base
    And path 'pokemon/clefairy/provasS206_L1'
    When method get
    Then status 404    

Scenario: Testando a criação de um novo elemento pokemon aonde não é permitido e portanto não será criado
    Given url url_base
    And path 'pokemon'
    And request {name: "RenZo", height: 60, weight: 60, base_experience: 200, is_default: true}
    When method post
    Then status 404
    
