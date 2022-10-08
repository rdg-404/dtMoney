import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard/>



      <Modal 
          isOpen={isNewTransactionModalOpen} ///mostra que o modal está aberto 
          onRequestClose={handleCloseNewTransactionModal} //fechar modal ao clicar fora da area no esc
      >
          <h2>Cadastrar transação</h2>
      </Modal>


      <GlobalStyle/>
    </>
  );
}

