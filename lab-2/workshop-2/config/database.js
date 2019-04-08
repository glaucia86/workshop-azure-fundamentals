/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pelas connectionStrings da aplicação com o MongoDb
 *  & CosmosDb
 * Data: 07/04/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost/workshop-lab2',
  },

  /* cosmosdb: (o ideal é criar um outro arquivo para colocar as connectionstring e colocar
    no .gitignore para que não que não fique exposto a sua key da connection string)
    Ex.: https://docs.microsoft.com/pt-br/azure/cosmos-db/mongodb-migrate
    p.s.: depois descomentar a linha config do .gitignore
  {
    name: 'node-todo-hackathon-db',
    url: ''mongodb://mean-todo-list-workshop:<colocar-connection-string-aqui>@mean-todo-list-workshop.documents.azure.com:10255/workshop-lab2?ssl=true',',
    port: 10255,
  }, */
};
