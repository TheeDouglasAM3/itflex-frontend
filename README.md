# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/itflex-frontend.git

# Instale as depedencias
$ npm install
ou
$ yarn install

# Registrar para criar uma chave para usar a API em https://openweathermap.org/
# Depois que conseguir a chave, deve-se criar um arquivo .env e colocar na raiz do projeto
# E neste arquivo deve estar incluso:
REACT_APP_OPENWEATHERMAP_TOKEN = 'sua_chave'

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o website em: http://localhost:3000/

# Conteúdo

### Requisitos

* A interface deve ser responsiva (desktop e mobile)
* Utilizar Material Design
* Utilizar algum framework SPA (Single Page Application)
  * Foi utilizado React JS
* Componentização do código
* Criar um repositório no github com o código da aplicação
* Subir a aplicação em alguma plataforma (Vercel)
* Descrever no README como subir a aplicação

### Diferencial

* Adicionar validações
* Utilizar JavaScript es6+
* Utilizar LINTER

### Plus

* Exibir as informações de tempo atuais utilizando a [API específica](https://openweathermap.org/current)