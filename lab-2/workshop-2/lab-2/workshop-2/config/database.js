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
    localUrl: 'mongodb://localhost/workshop-lab-2-db',
  },

  cosmosdb: {
    name: 'node-teste-workshop',
    url: 'mongodb://node-teste-lab-workshop:Co7BP2wSJzyZMzW5OcHEJPvVGHjU50bZz3IjbOGMbqP5YVid1WrSxMdzNiNZYOrAzmQyhwPq8NpzW1EVR79ltQ==@node-teste-lab-workshop.documents.azure.com:10255/workshop-lab-2-db?ssl=true&replicaSet=globaldb',
    port: 10255,
  },
};
