import React, { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionsContext';


import { Container } from "./styles";


export function Summary(){

    const {transactions} = useContext(TransactionContext);

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className='highlight-color'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>

        </Container>
    )
}