import { FormEvent, useState } from 'react';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

interface  NewTransactionModalProps {
    isOpen: boolean;
    
    onRequestClose: () => void; // passase vazio pq no local onde esta a função q fazera a execução
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        // função para impedir o funcionamento padrao do formulario
        event.preventDefault();

      await createTransaction({
            title,
            amount,
            category,
            type,
        })

    // para deixar os requisitos quase vazios
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose(); // fechando o Modal se a transação der certo

}

    return(

        <Modal 
        // abrir o Modal
        isOpen={isOpen} 

        // fecha o Modal
        onRequestClose={onRequestClose}

        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        > 

        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar Modal" />
        </button>
        

        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
        placeholder='Nome' 
        value={title}
        onChange={event => setTitle(event.target.value)} // toda vez q os dados for alterado ele passa o valor digitado
        />

        <input 
        type="number"
        placeholder='Preço' 
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
            <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
                <img src={outcomeImg} alt="Saida" />
                <span>Saida</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input 
        placeholder='Categoria' 
        value={category}
        onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'> Cadastrar</button>

        
        </Container>
    </Modal>

    );
}