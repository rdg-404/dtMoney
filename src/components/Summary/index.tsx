import React, { useContext } from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionsContext';


import { Container } from "./styles";


export function Summary(){

    const {transactions} = useContext(TransactionContext);


    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if(transaction.type === 'deposito'){
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0);


    //percorre os dados e verifica
    const summary = transactions.reduce((acc, transaction) =>{

        if(transaction.type === 'deposito'){
            acc.deposito += transaction.amount;
            acc.total += transaction.amount;
        }
        else if(transaction.type === 'saida'){
            acc.saida += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        //zera os valores
        deposito: 0,
        saida: 0,
        total: 0,

    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>
                    { new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposito)}    
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>
                    -
                    { new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL', 
                    }).format(summary.saida)} 
                </strong>
            </div>
            <div className='highlight-color'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                { new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(summary.total)} 
                </strong>
            </div>

        </Container>
    )
}