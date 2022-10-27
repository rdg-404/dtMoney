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
//para o componente aceitar ter filhos
interface TransactionsProviderProps {
    children: ReactNode; //aceita filhos de qualquer tag html
}

export const TransactionContext = createContext<Transaction[]>([]);


//desentruturando e pegando somente o children de dentro das props
export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    //utilizando axios
    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            { children }
        </TransactionContext.Provider>
    )
}