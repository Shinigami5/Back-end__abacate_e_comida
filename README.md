# Back-end__abacate_e_comida

1-baixe o codigo utilizando o comando " git clone url do repositório"

2-configura o banco de dados MongoDB

2.1- digite o comando em uma pasta onde vai ser criado o banco de dados     "C:\Program Files\MongoDB\Server\4.2\bin\mongod" --dbpath .

2.2-    depois em qualquer cmd digite  >"C:\Program Files\MongoDB\Server\4.2\bin\mongo"
           para iniciar um cliente 

2.3-    digite   > use DadoAP2db     para criar o db que vai ser utilizado pelo site

2.4-     digite  > db.createCollection("Receita")  para criar o colleçao Receita


3-execute o comando "dotnet run" em "/back-end__abacate_e_comida/API-asp.net"

4-execute o comando "npm install" em   "/back-end__abacate_e_comida/Web-angular"
-- isso vai baixa todas as depedecias do node que o projeto angular utiliza --

5-se o passo 3 nao funcionar tente com " npm install node-modules "

6-  acesse o localhost:4200     para acessa o site
