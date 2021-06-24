import './estilo.css';
import { useHistory } from "react-router-dom";
import http from '../../Componentes/http';


const Carrinho = ({ produtos, excluirProduto }) => {

    const history = useHistory()

    const criarPedido = () => {
        const pedido = {
            email: localStorage.getItem('email'),
            itens: [

            ]
        }
        produtos.forEach(element => {
            pedido.itens.push({
                quantidade: element.quantidade,
                codigoProduto: element.codigo
            })
        });
        http.post('pedido', pedido)
            .then(response => {
                console.log(response.data);
                history.push('/finalizar/' + response.data.numeroPedido)
            })
    }

    return (
        <div>
            <h1>Carrinho</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Código</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((item, indice) => <tr key={item.id}>
                            <td>{item.nome}</td>

                            <td className="preco"><p>R$ </p>{item.preco.toFixed(2)}</td>
                            <td><input value={item.quantidade} className="inputCarrinho" type="number" placeholder="1-100" onChange={(evento) => {
                                item.quantidade = evento.target.value
                            }}></input></td>
                            <td>{item.codigo}</td>
                            <td><button className="botaoExcluir" onClick={() => {
                                excluirProduto(indice)
                            }}>Excluir</button></td>
                        </tr>)}
                    </tbody>
                </table>
                <button onClick={criarPedido} className="botaoComprar">Comprar</button>
            </div>
        </div>

    )
}

export default Carrinho;