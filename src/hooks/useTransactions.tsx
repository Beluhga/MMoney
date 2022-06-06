import { createContext, useState, useEffect, ReactNode, useContext} from 'react';
import { api } from '../services/api';

interface TransactionProps {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// o exemplo de baixo e o mesmo q o de cima omitindo os dois selecionados
type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>;

// para corrigir o erro de children do App.tsx
// REactNode aceita qualquer tipo de conteudo React: js, tsx, html...
interface TransactionsProviderProps {
    children: ReactNode;
}

// conteudo dentro do contexto
interface TransactionsContextDataProps {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

// contexto q teve o formato auterado
export const TransactionsContext = createContext<TransactionsContextDataProps>(
    {} as TransactionsContextDataProps // pra dizer o formato é sim a passada
    );

// para pegar o {children} (que é o conteudo dentro do componente), tb é o estado de transações
export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    
  useEffect(() =>{
      // busca as informações de transactions usando o get
      api.get('/transactions') 
      // para salvar as informações dentro do estado
     .then(response => setTransactions(response.data.transactions))

  }, []);

  // função para passar as novas informações passada pelo modal
  // TransactionInputProps e os dados da transação
async function createTransaction(transactionInputProps: TransactionInputProps) { // função asincrona, para retorna a promesse
  const response = await api.post('/transactions', {
    ...transactionInputProps, createdAt: new Date(),
  })
  const { transaction } = response.data; // acessando os dados de acesso

  setTransactions([
      ...transactions, // copia todas as informações ja existentes
      transaction, // e adiciona no final uma nova
  ]);
  };

  return (
      // noção de pontos par acessar uma propriedade e o valor do contexto atual
      <TransactionsContext.Provider value={{ transactions, createTransaction}}>
          {children}
      </TransactionsContext.Provider>
  )
    
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;

}

/*
type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>;

o exemplo do Omit de cima imita o exemplo de baixo

/*interface TransactionInputProps {
    title: string;
    amount: number;
    type: string;
    category: string;
}


*/