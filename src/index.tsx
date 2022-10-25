import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'; 

createServer({

  models: {
    transaction: Model,
  },

  routes(){
    this.namespace = 'api'; //pega qualquer coisa que vinher acompanhado de api


    ///route transactions retorna os dados
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) //transforma o formato da resposta em JSON

      return schema.create('transaction', data)// cria instancia no db
    })
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

