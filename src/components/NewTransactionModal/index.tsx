import Modal from "react-modal";
import {Container} from './styles';
import {NewTransactionButton, RadioBox} from './styles';
import fecharImg from '../../assets/fechar.svg';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import { FormEvent, useState } from "react";

//props do modal
interface NewTransactionModalProps {
    isOpen: boolean;  
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose } : NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposito')

    function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault();

      console.log({
        title,
        value,
        category,
        type
      })
    }

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

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>


          <input 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)} //acessando o valor digitado e salvando no estado
          />

          <input 
            type="number" 
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <NewTransactionButton>
            <RadioBox 
              type="button"
              onClick={() => { setType('deposito')}} //se clicar no botao ele fica deposito
              isActive={type === 'deposito'} //ativa o botao
              activeColor="green"
              
            >
              <img src={entradasImg} alt="Entradas" />
              <span>Entradas</span>
            </RadioBox>

            <RadioBox 
              type="button"
              onClick={() => { setType('saida')}}
              isActive={type === 'saida'}
              activeColor="red"
            >
              <img src={saidasImg} alt="Saídas" />
              <span>Saídas</span>
            </RadioBox>
          </NewTransactionButton>
          <input 
            placeholder="Categoria" 
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
    </Modal>
    );
}