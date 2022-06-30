import Modal from "react-modal";

import { Container } from './style';

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