# InGaia

**Table of Contents**

[TOCM]

[TOC]

### Features

- API para retornar o valor do imóvel;
- Node.JS.
- Rest API.

###Preparando WorkSpace
Node
> Instalar node versão v14.15.4

NPM
> 6.14.10

Docker
                    
> Realizar instalação Docker

####Inicialização do projeto

> Executar comando npm install

Em seguida inicialize o projeto local
> npm run dev


####Rotas　
> /v1/calc/metro/quadrado

enviar via body payload conforme exemplo abaixo(em json), substituindo valor pelo desejado:
Envio:
```javascript
{
	"meters": 165
}
```
Retorno esperado
```javascript
{
	"Valor do imóvel": 82500
}
```

####Subindo Docker local
> O projeto possui um Dockerfile em sua raiz, o mesmo contém dois códigos para deploy, o primeiro que já se encontra descomentado é para utilização em ambiente local
O segundo está configurado para realizar em produção após executar o build(deverá ficar comentado até obter um ambiente especifico).

Comandos para inicializar o Docker local (lembrando, você deve estar com o terminal na raiz do projeto onde encontra-se o Dockerfile):
- docker build -t seunome/nome-do-projeto .
- docker run -p 49160:3000 -d seunome/nome-do-projeto
- docker image list 
>No final basta executar localhost:49160
