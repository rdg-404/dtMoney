import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'; 

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvedor Front End',
          type: 'deposito',
          category: 'Dev',
          amount: 4000,
          createdAt: new Date('2022-05-23 08:30:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type:'saida',
          category: 'Casa',
          amount: -1100,
          createdAt: new Date('2023-05-25 14:00:00'),
        },
      ]
    })
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

