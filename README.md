# API GOT
## Requisitos
- [Yarn](https://yarnpkg.com/)
- [NodeJS](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [MySQL](https://www.mysql.com/) ou [Xampp](https://www.apachefriends.org/pt_br/index.html)

## Importação da base de dados via PhpMyAdmin

Dentro do repositório há uma pasta ```db```, dentro da mesma irá ter o arquivo ```gotbase.sql```, irá baixar ele.
Através do seu ```PhpMyAdmin``` crie um banco de dados chamado ```gotbase```.
Vá até a o banco de dados criado, clique em importar, adicione o arquivo baixado e importe-o.
A base está pronta para uso.

## Como executar o projeto

Para baixar as dependencias do projeto, dentro do projeto através do terminal irá ```yarn install```
Após a execução do comando acima, irá executar o comando ```yarn start:dev```.
O projeto irá estar executando no ```localhost:3000/api```.

## Observações

- Caso não consiga executar o projeto, foi feito um deploy no heroku. [Clique aqui](https://houses-got.herokuapp.com/api/#/) para acessar a API via heroku.

- O deploy no heroku é free, pode ser que a primeira vez que for feita a request o mesmo esteja em stand by, ou seja, não responder na primeira requisição.

- A deleção adicionada não é a mais utilizada, pois exclui do banco, a melhor deleção para não perder dados é a deleção lógica.

- Foram deixadas nulos dois campos, fundation_year e current_lord, vendo que a API que foi enviada em algumas vezes não tem um ou outro ou os dois.