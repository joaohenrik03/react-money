import { Container } from "./style";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc ,transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount 
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount 
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeSvg} alt="Entradas" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.deposits)
                    }      
                </strong>  
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeSvg} alt="Saídas" />
                </header>
                <strong>-
                    {
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.withdraws)
                   }
                </strong>  
            </div>

            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalSvg} alt="Total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.total)
                    }    
                </strong>  
            </div>
        </Container>
    )
}