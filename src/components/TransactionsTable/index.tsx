import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

type Transaction = {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createAt: string;
}

export function TransactionTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => {
                            return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    { new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    { new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createAt))}
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}