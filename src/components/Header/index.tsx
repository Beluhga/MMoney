import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTRansaction: () => void;
}

// props para usar o Modal dentro do App.tsx
export function Header({onOpenNewTRansaction}: HeaderProps){


    return (
        <Container>
         <Content>
            <img src={Logo} alt="M Money" />
            <button type="button" onClick={onOpenNewTRansaction}>
                Nova transação
            </button>


         </Content>
        </Container>
    )
}