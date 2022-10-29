import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import {  TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root'); ///deixa a id root sem acesso quando o modal ativo

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);



  function handleOpenNewTransactionModal(){
      setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModal(false)
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard/>

      {/* recebe as props definida no compenente modal */}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />


      <GlobalStyle/>
    </TransactionsProvider>
  );
}

