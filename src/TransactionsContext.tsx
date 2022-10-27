import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./components/services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//herda tudo da interface transaction menos id e createdAt
type TransactionInput = Omit<Transaction, "id" | "createdAt">;

//para o componente aceitar ter filhos
interface TransactionsProviderProps {
    children: ReactNode; //aceita filhos de qualquer tag html
}


interface TransactionContextData {
    transactions: Transaction[];
    createTransactions: (transactions: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);


//desentruturando e pegando somente o children de dentro das props
export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    //utilizando axios
    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
    }, []);


    function createTransactions(transaction: TransactionInput){
      api.post("/transactions", transaction)
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransactions}}>
            { children }
        </TransactionContext.Provider>
    )
}