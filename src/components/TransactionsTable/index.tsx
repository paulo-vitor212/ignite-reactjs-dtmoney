import * as Styles from './styles';

export function TransactionsTable() {
    return (
        <Styles.Container>
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
                        <td>Desenvolvimento de website</td>
                        <td>R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 5.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Styles.Container>
    )
}