import Modal from "react-modal";
import {Container} from './styles';
import {NewTransactionButton, RadioBox} from './styles';
import fecharImg from '../../assets/fechar.svg';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import { useState } from "react";

//props do modal
interface NewTransactionModalProps {
    isOpen: boolean;  
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose } : NewTransactionModalProps) {

    const [type, setType] = useState('deposito')

    return (
        
      <Modal 
        isOpen={isOpen} ///mostra que o modal está aberto 
        onRequestClose={onRequestClose} //fechar modal ao clicar fora da area no esc
        overlayClassName="react-modal-overlay" ///estilizar parte escura do modal
        className="react-modal-content" ///estilizar parte do conteudo do modal
      >

        <button type="button" onClick={onRequestClose} className='react-modal-close'>
          <img src={fecharImg} alt="Fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>


          <input 
            placeholder="Título"
          />

          <input 
            type="number" 
            placeholder="Valor"
          />

          <NewTransactionButton>
            <RadioBox 
            type="button"
            onClick={() => { setType('deposito')}} //se clicar no botao ele fica deposito
            isActive={type === 'deposito'} //ativa o botao
            >
              <img src={entradasImg} alt="Entradas" />
              <span>Entradas</span>
            </RadioBox>

            <RadioBox 
            type="button"
            onClick={() => { setType('saida')}}
            isActive={type === 'saida'}
            >
              <img src={saidasImg} alt="Saídas" />
              <span>Saídas</span>
            </RadioBox>
          </NewTransactionButton>
          <input 
            placeholder="Categoria" 
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
    </Modal>
    );
}