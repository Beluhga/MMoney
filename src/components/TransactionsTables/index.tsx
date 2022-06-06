import {  useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){
    // sempre como a informação dentro do useContext (contexto) mudar os dois componentes vao re-renderizar
    // sempre q os dados dentro de um contexto mudar, o componente vai perceber as mudanças e ira fazer uma nova renderização trazendo os novos dados
    const { transactions } = useTransactions();

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {transactions.map(transaction => ( 
                    // para mapear e retorna todo o conteudo do HTML de transaction com os dados da interface
                    // a key pq precisa ser Unico
                      <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                        
                            {new Intl.NumberFormat('pt-BR', { 
                            // para formata os valores para real do Brasil
                            style: 'currency', 
                            currency: 'BRL'
                        })
                        .format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                            // para formata a data
                            new Date(transaction.createdAt)
                        )}
                        </td>
                      </tr>
                     ))}
 
                </tbody>
            </table>
        </Container>
    );
}

/*
 useEffect(() =>{
        fetch('http://localhost:3000/api/transactions') // usa o endereço da propria aplicação, 
        .then(response => response.json()) // resposta para JSON
        .then(data => console.log(data))

    }, []);

    ---------- Axios serve para interceptar


*/