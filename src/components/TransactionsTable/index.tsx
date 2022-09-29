import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposito">R$15,000</td>
                        <td>Desenvolvimento</td>
                        <td>05/02/21</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">- R$800,00</td>
                        <td>Casa</td>
                        <td>10/02/21</td>
                    </tr>
            
                </tbody>
            </table>
        </Container>

    )

    
}