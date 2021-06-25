import './estilo.css';
// import { useHistory } from "react-router-dom";
// import http from '../../Componentes/http';
// import { Link } from 'react-router-dom'

const FinalizaPedido = () => {

    const [pagamentos] = useState(['PIX', 'BOLETO', 'CREDITO', 'DEBITO'])

    const { codigo } = useParams()

    const finalizacaoPedido = (evento) => {
        evento.preventDefault()

        const pedido = {
            numeroPedido: codigo,
            formaPagamento: pagamento
        }
        http.post('pedido/finalizar', pedido)
            .then(response => {
                console.log(response);
            }
            ).catch(erro => {
                console.log(erro);
            })
    }


    return (
        <h1></h1>
    )
}

export default FinalizaPedido;
