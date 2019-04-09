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

  cosmosdb: {
    name: 'node-teste-workshop',
    url: 'mongodb://node-teste-workshop:gNh5isbOlnVnIQ6CYfroiWY9nJXgTCy3eANP5zl6WDwlew5JKdTVvjPMOoVEvthAf3wzgqBDYMlRNA1zBGlxZg%3D%3D@node-teste-workshop.documents.azure.com:10255/workshop-lab2?ssl=true',
    port: 10255,
  },
};
