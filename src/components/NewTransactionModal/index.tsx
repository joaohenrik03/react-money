import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { ChooseTransitionTypeContainer, Container } from './style';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type="button" className="react-modal-close-button">
                <img 
                    src={closeImg} 
                    alt="Fechar modal" 
                    onClick={onRequestClose} 
                />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder="Título"
                />
                <input 
                    type="number" 
                    placeholder="Preço"
                />

                <ChooseTransitionTypeContainer>
                    <button type="button" >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    
                    <button type="button" >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </ChooseTransitionTypeContainer>

                <input 
                    type="text" 
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}