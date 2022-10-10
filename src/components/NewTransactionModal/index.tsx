import Modal from "react-modal";
import {Container} from './styles'

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
      >

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