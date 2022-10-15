import Modal from "react-modal";
import {Container} from './styles';
import fecharImg from '../../assets/fechar.svg';

//props do modal
interface NewTransactionModalProps {
    isOpen: boolean;  
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose } : NewTransactionModalProps) {
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