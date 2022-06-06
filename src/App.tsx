import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTables";
import {  TransactionsProvider } from "./hooks/useTransactions";


// tem q usar essa função para dizer qual e o elemento root do modal
Modal.setAppElement('#root');



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); // para usar no Modal
  


  function handleOpenNewTransactionModal(){
    // para abrir o Modal
      setIsNewTransactionModalOpen(true);

  }

  function handleCloseNewTransactionModal() {
    // para fechar o Modal
      setIsNewTransactionModalOpen(false)

  }
  return (
    
    <TransactionsProvider>
      <Header onOpenNewTRansaction={handleOpenNewTransactionModal}/> 

      <Dashboard />
      
      <TransactionsTable />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

/*

import styled from 'styled-components';

const Title = styled.h1` styled.(elemento do html)
  color: #8257e6;
  font-size: 64px;

  <Header onOpenNewTRansaction={handleOpenNewTransactionModal}/> 
  função passada do Header

pq o <TransactionsContext.Provider value={[]}> porvider esta em volta de todos os componentes
vai poder consumir o conteudo desse contexto


*/

