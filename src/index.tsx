import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'; 

createServer({
  routes(){
    this.namespace = 'api'; //pega qualquer coisa que vinher acompanhado de api


    ///route transactions retorna os dados
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction01',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

