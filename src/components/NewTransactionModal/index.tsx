import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { ChooseTransitionTypeContainer, Container, RadioBox } from './style';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit') }} 
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>            
                    </RadioBox>
                    
                    <RadioBox  
                        type="button" 
                        onClick={() => { setType('withdrawal') }} 
                        isActive={type === 'withdrawal'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
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