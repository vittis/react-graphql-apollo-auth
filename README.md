# NPD Frontend

## Instalação e uso
Clonar repositório, navegar até a pasta raiz e executar o comando a seguir (requer node e npm):
```sh
npm install
```
Navegar até a pasta raiz e executar o comando a seguir:
```sh
npm start
```

## Estrutura do projeto

### `app/`
Foi usada a  [arquitetura container/component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). Componentes são divididos entre as pastas `containers` (smart components) e `components` (dumb components). Fazendo uma citação direta: "**Container components care about how things work, while components care about how things look.**"
### `config/`
Contem configurações do webpack e jest.
### `server/`
Contem configurações de desenvolvimento e de produção do servidor Express que serve a aplicação.
````
app/
|  |- components/______________________# Dumb/Presentational components
|    |- Header/ _______________________# Header component
|    |- |- tests/______________________# Local tests
|    |- |- |- index.test.js
|    |- |- Header.js __________________# Header.js
|    |- |- header.module.scss__________# Extensão .module.scss para CSS com escopo local
|    |- |- index.js____________________# Default export de Header.js
|    |- Footer/ 
|    |- ...
|  |- containers/______________________# Smart components
|    |- App/___________________________# Root App component
|    |- |- tests/ _____________________# Local tests
|    |- |- |- index.test.js
|    |- |- App.js ____________________ # App.js
|    |- |- app.module.scss_____________# Extensão .module.scss para CSS com escopo local
|    |- |- index.js ___________________# Default export de App.js
|    |- HomePage/ 
|    |- LoginPage/ 
|    |- ...
|  |- styles/__________________________# Estilos globais
|- app.jsx____________________________ # App entrypoint
config/________________________________# Webpack e Jest configs
server/________________________________# Server configs
````
## Comandos

```sh
npm start # inicia servidor para desenvolvimento em http://localhost:3000
npm run build # cria pasta build com assets minificados e prontos para produção
npm test # executa testes e gera pasta coverage com cobertura de testes
npm run lint # lint javascript
npm run clean # remove pastas build e coverage
```
A implementação dos comandos estão no `package.json`.
***
# Stack FrontEnd
## Desenvolvimento
* UI: React
* State Management: Apollo(GraphQL) e Redux(se fizer sentido)
* Styling: CSS Modules + Sass
* Framework CSS: Bootstrap 4 com reactstrap
* Dev Server: Express + webpack-dev-middleware

## Build tools
* Module bundler: Webpack 4
* Transpilador ES6^: Babel 7

## Tests
* Assertion: Jest
* React Test Utils: Enzyme

## Linters
* ESlint
* Prettier

## Ferramentas secundárias
* Routing: react-router
* Document head manager: react-helmet
* Asynchronously component loading: react-loadable

