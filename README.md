## Api rest node.js
Api em node js + integração com banco de dados MongoDB("NOSQL")

## Como usar
Certifique-se de ter o node.js e o npm instalado em sua maquina.

Após ter clonado o repositorio e extraido o arquivo abra o terminal e  execute o seguinte comando no diretorio do arquivo.

```$ npm install```

Apos a instalação dos pacotes o projeto já estara pronto para ser executado, mas antes de executar 
edite o arquivo ```app.js``` na linha de conexação com o banco de dados colocando a sua url de conexação do ```mlab.com```, agora voce estara pronto para executar o projeto.

Use o comando ```$ npm start``` para executar o projeto
e utilize algum software de requisições HTTP.


## Quais são os Endpoints?
Endpoint | Métodos HTTP | Descrição
------------ | ------------- | -------------
```url.com/``` | GET | url default retorna todos os dados
```url.com/products/(nome produto)``` | GET | url para retornar produtos de um determinado nome
```url.com/products/admin/Id``` | GET | url para retornar produto de um determinado id
```url.com/products/tags/games``` | GET | url para retornar produto de uma determinada tag
```url.com/products/Id``` | PUT | url para atualizar um produto passando o id do produto a ser atualizado
```url.com/products``` | POST | url para fazer post dos valores
```url.com/products``` | DELETE | url para deletar um produto passando o id pelo body