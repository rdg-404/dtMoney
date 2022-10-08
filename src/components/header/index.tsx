import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';


import { Container, Content } from './style';


export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);



    function handleOpenNewTransactionModal(){
        setIsNewTransactionModal(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModal(false)
    }
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>


                <Modal 
                    isOpen={isNewTransactionModalOpen} ///mostra que o modal está aberto 
                    onRequestClose={handleCloseNewTransactionModal} //fechar modal ao clicar fora da area no esc
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}
