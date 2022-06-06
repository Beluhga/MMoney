import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model} from "miragejs";
import {App} from './App';

  createServer({
    models: {
      transaction: Model,
    },

    // para deixar os dados pre cadastrados
    seeds(server){
      server.db.loadData({
        // sempre colocar no nome do Model no plural transaction - transactions
        transactions: [
          {
            id: 1,
            title: 'Freelancer de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2022-06-25 09:00:00')
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 1000,
            createdAt: new Date('2022-06-14 11:00:00')
          },
        ],
      })

    },

  routes(){
    // pq na chamanda do fetch, vai esta a parti do endereço "api"
    this.namespace = 'api'; 

    // quando tiver uma requisição do tipo 'get' pra rota 'transactions' ele irar devolver alguma coisa, no caso. Os dados do JSON
    this.get('/transactions', () => { 
      // todas as transações do banco de dados
      return this.schema.all('transaction')
    })

    //schema 
    //request é os dados enviados pela NewTransactions
    this.post('/transactions', (schema, request) => { 
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
API Mirage.JS

para ver o network q fica no devtools da aplicação
no Console da pra ver as rotas, da pra ver a resposta da requisição
a requisição q foi feita (caso tenha enviado algum dado)



*/


