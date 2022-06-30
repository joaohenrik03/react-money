import Logo from '../../assets/logo.svg';

import { Container, Wrapper } from './style';

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <div className="logo">
                    <img
                        src={Logo}
                        alt="Logo"
                    />
                    <span>React Money</span>
                    </div>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Wrapper>
        </Container>
    )
}