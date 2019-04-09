# Hospedagem de Aplicações Web no Azure: Laboratório 2 - TODO List MEAN

[![bit-azure.png](https://i.postimg.cc/ZKwS8SHj/bit-azure.png)](https://postimg.cc/vcxkyCp6)

Nesse Laboratório estaremos integrando uma aplicação MEAN (Mongo, Express, Angular & Node.js) ao **[Azure App Service](https://aka.ms/AA4qm7c)** integrando o banco MongoDb ao **[CosmosDb](https://aka.ms/AA4qm7e)**

## Agenda - Lab 02

- **[1. Executando a Aplicação MEAN](#1-executando-a-aplicação-mean)**

- **[2. Criando Grupo de Recursos](#2-criando-grupo-de-recursos)**

- **[3. Migrando a Base de Dados Local para Nuvem com CosmosDb](#3-migrando-a-base-de-dados-local-para-nuvem-com-cosmosdb)**


## 1. Executando a Aplicação MEAN

1. Depois de ter o MongoDb devidamente instalado na sua máquina, execute o comando `mongod` no prompt comando. Se aparecer a mensagem abaixo é porque o **MongoDb** está executando corretamente na sua máquina.

[![Screen-Shot-04-08-19-at-10-36-PM.png](https://i.postimg.cc/j2C6TPkJ/Screen-Shot-04-08-19-at-10-36-PM.png)](https://postimg.cc/rRXRC0T8)

2. Agora, vai até a pasta: `lab-2\workshop2` e execute o comando: 

```
> npm run dev
```

[![Screen-Shot-04-08-19-at-10-39-PM.png](https://i.postimg.cc/d04T0DCR/Screen-Shot-04-08-19-at-10-39-PM.png)](https://postimg.cc/hJQGyDph)

3. Feio isso, abre o browser em: `http://localhost:8000/` e comece a incluir algumas tarefas nessa lista

[![Screen-Shot-04-08-19-at-10-43-PM.png](https://i.postimg.cc/QMHWHhJR/Screen-Shot-04-08-19-at-10-43-PM.png)](https://postimg.cc/qtH7FfYL)

4. Agora abre o **[MongoDb Compass GUI](https://www.mongodb.com/download-center/compass)** e veja se as tarefas que acabamos de incluir foram persistidas no MongoDb. Se aparecer o banco: `workshop-lab2`. É porque foi persistido as nossas tarefas nesse Banco

[![imagem-1.jpg](https://i.postimg.cc/J76VQ8NT/imagem-1.jpg)](https://postimg.cc/xqz40WFH)

Observem que, tudo o que incluímos no browser, está gravando no MongoDb

[![Screen-Shot-04-08-19-at-10-45-PM.png](https://i.postimg.cc/q7XW6HBx/Screen-Shot-04-08-19-at-10-45-PM.png)](https://postimg.cc/67qMFSv8)


## 2. Criando Grupo de Recursos

1. Abre o **[Portal Azure](https://aka.ms/AA4qm7a)** com as mesmas credenciais criadas no laboratório 1

2. Ao conectar com o Portal, vocês verão uma tela como da imagem abaixo:

[![Screen-Shot-04-08-19-at-10-58-PM.png](https://i.postimg.cc/Gp6w1xpZ/Screen-Shot-04-08-19-at-10-58-PM.png)](https://postimg.cc/VS9HqMnR)

3. Dentro do portal, abram o **[Azure Cloud Shell](https://aka.ms/AA4q1kr)**

[![imagem-1.jpg](https://i.postimg.cc/pVhY0N3W/imagem-1.jpg)](https://postimg.cc/yWKZdGVt)

4. Altere para o **Power Shell**

[![Screen-Shot-04-09-19-at-12-00-AM.png](https://i.postimg.cc/x878BFZB/Screen-Shot-04-09-19-at-12-00-AM.png)](https://postimg.cc/xNv9zgnP)

5. Agora com o Power Shell aberto, vamos criar um **[Resource Group](https://aka.ms/AA4qh09)**. Para isso, digite o comando abaixo no Power Shell:

```
> az group create --name nodeTesteResourceGroupWorkshop --location "Brazil South"
``` 

Após isso, aparecerá um json informando que foi bem sucedido a criação do Resource Group

[![Screen-Shot-04-09-19-at-10-23-AM.png](https://i.postimg.cc/k5KrWS4d/Screen-Shot-04-09-19-at-10-23-AM.png)](https://postimg.cc/KKGs2RB9)


## 3. Migrando a Base de Dados Local para Nuvem com CosmosDb

Uma das maiores vantagens de trabalhar com **[CosmosDb](https://aka.ms/AA4qm7e)** é que podemos persistir esses dados direto na nuvem, sem a necessidade de executar o MongoDb localmente. Mas, como fazemos isso? É o que iremos ver agora!

1. Vamos criar uma conta BD no CosmosDb. Para isso, digite no Power Shell o seguinte comando

```
> az cosmosdb create --name node-teste-workshop --resource-group nodeTesteResourceGroupWorkshop --kind MongoDB 
```

Após a execução do comando acima, ele vai gerar um json informando que conseguimos criar uma conta no CosmosDb

[![Screen-Shot-04-09-19-at-10-41-AM.png](https://i.postimg.cc/QtyKTVd1/Screen-Shot-04-09-19-at-10-41-AM.png)](https://postimg.cc/G8vp0LYm)

2. Agora vamos conectar a App ao MongoDb de produção. Mas antes, vamos recuperar a chave do banco de dados. Para isso, basta executar o comando abaixo:

```
> az cosmosdb list-keys --name node-teste-workshop --resource-group nodeTesteResourceGroupWorkshop
```

Ao executar o comando acima, ele vai nos mostrar as chaves

[![Screen-Shot-04-09-19-at-10-45-AM.png](https://i.postimg.cc/yNTbsCYw/Screen-Shot-04-09-19-at-10-45-AM.png)](https://postimg.cc/JyGq5gXq)

Há uma maneira mais simples de listar essas keys. Observem no gif abaixo: (passo: `CosmosDb -> BD Criado -> ConnectionStrings`)

[![workshop-1.gif](https://s2.gifyu.com/images/workshop-1.gif)](https://gifyu.com/image/31Vt)

Nós vamos precisar do **Primary Password**. Assim que, copie e cole essa chave! 

3. Agora vamos pegar a connectionString do CosmosDb. Para isso, bastam seguir o gif abaixo: (passo: `CosmosDb -> BD Criado -> Linguagem Usada: Node.js -> QuickStart`)

[![workshop-2.gif](https://s2.gifyu.com/images/workshop-2.gif)](https://gifyu.com/image/31V1)

4. Feito isso, vamos agora usar essa connectionString do CosmosDb e colocar na nossa aplicação. Abram o Vs Code e coloquem a connectionString dentro do arquivo `database.js` como na imagem abaixo:

[![workshop-3.gif](https://s2.gifyu.com/images/workshop-3.gif)](https://gifyu.com/image/31Zt)

5. Agora, vamos incluir o Banco local **MongoDb** nessa connectionString. no final ela ficará dessa maneira (**após a porta 10255**)

```
> url: 'mongodb://<cosmosdb_name>:<primary_master_key>@<cosmosdb_name>.documents.azure.com:10255/workshop-lab2?ssl=true',
```







