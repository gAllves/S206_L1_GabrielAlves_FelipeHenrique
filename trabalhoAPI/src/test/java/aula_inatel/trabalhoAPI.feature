Feature: Testando GoRest API

Background: Executa antes de cada teste
    * def url_base = 'https://gorest.co.in/public/v2'
    * def request_json1 = read("request_json1.json")

Scenario: Pegando elementos do array de response 'users' e testando seu tipo
    Given url url_base
    And path '/users'
    When method get
    Then status 200
    And match each $ contains {name: '#string', id: '#number'}

Scenario: Testando se o id do primeiro elemento do array 'users' é igual a 5710561
    Given url url_base
    And path '/users'
    When method get
    Then status 200
    And match $.[0].id == 5710561

Scenario: Pegando elementos do array de response 'posts' e testando seu tipo
    Given url url_base
    And path '/posts'
    When method get
    Then status 200
    And match each $ contains {id: '#number', user_id: '#number', title: '#string', body: '#string'}

Scenario: Testando se o title do terceiro elemento do array 'posts'
    Given url url_base
    And path '/posts'
    When method get
    Then status 200
    And match $.[2].title == 'Cognomen centum voluptatum supellex succedo.'


Scenario: Testando a criação de um novo elemento sem autorização (Caso negativo)
    Given url url_base
    And path '/users'
    And request request_json1
    When method post
    Then status 401

Scenario: Testando retorno do "users" com informações invalidas (Caso negativo)
    Given url url_base
    And path '/users/1'
    When method get
    Then status 404    


    