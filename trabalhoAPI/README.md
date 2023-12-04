S206 - Qualidade de Software

Trabalho de API: Gabriel Alves Fernandes e Felipe Henrique Conrado

Informações relevantes:

Como executar o projeto: 'mvn test -Dtest="NomeDoArquivo" '; no nosso caso 'mvn test -Dtest=TrabalhoRunner'

Como obter o relatório de testes: Após a execução, no diretório target/karate-reports/ , haverá um arquivo aula.inatel.trabalhoAPI.trabalhoAPI.html. Basta executar esse arquivo em um navegador de sua escolha. 

Exercício 2: 

1- Quantas suítes de teste você desenvolveu? 
Apenas uma suíte de teste

2- Os testes desenvolvidos são manuais ou automatizados?
São testes automatizados.

3- Onde os testes se localizam na pirâmide apresentada?
Se localizam no meio da pirâmide, como testes de integração (Serviço)

4- Os testes desenvolvidos são funcionais ou não-funcionais?
São testes funcionais.

5- Alguns dos testes desenvolvidos são testes Fim-a-Fim(End-To-End)?
Sim, pois buscamos uma informação no banco de dados que nos é retornada.

6- O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
A cada mudança do código, rodar novamente os casos de testes de maneira automatizada, a fim de garantir que as mudanças não tenham causado algum erro.
