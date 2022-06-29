import Logo from '../../assets/logo.svg';
import { Container, Wrapper } from './style';

export function Header() {
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
                <button type="button">
                    Nova transação
                </button>
            </Wrapper>
        </Container>
    )
}