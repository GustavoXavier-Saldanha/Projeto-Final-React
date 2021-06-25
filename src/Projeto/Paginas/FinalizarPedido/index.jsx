import './estilo.css';
 import { useState} from "react";
 import {useParams } from "react-router-dom";
 import http from '../../Componentes/http';
 

const FinalizaPedido = () => {

    const [pagamentos] = useState(['PIX', 'BOLETO', 'CREDITO', 'DEBITO'])
    const [formaPagamento, setPagamentos] = useState('')

    const [status] = useState(['FINALIZADO'])


    const { codigo } = useParams()


    const finalizacaoPedido = (evento) => {
        evento.preventDefault()

        const pedido = {
            numeroPedido: codigo,
            statusPedido: status,
            formaPagamento: formaPagamento
        }
        http.post('pedido/finalizar', pedido)
            .then(response => {
                console.log(response);
            }
            ).catch(erro => {
                console.log(erro);
            })
    }

    const manipuladorPagamento = (evento) => {
        setPagamentos(evento.target.value)
    }


    return (
        <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Finalização do Pedido</h1>
        <form onSubmit={finalizacaoPedido}>
          <div className="form-group">
            <label>Forma de pagamento</label>

            <div className="form-group">
            <select className="selectPagament" value={formaPagamento} onChange={manipuladorPagamento}>
                        <option>Escolha uma forma de pagamento</option>
                        {pagamentos.map((pgto, indice) => 
                            <option key={indice} value={pgto}>{pgto}</option>
                        )}
               
                    </select>
                    </div>
          </div>
         
          <button className="btn btn-dark btn-outline-dark btn-block text-light">
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
    )
}

export default FinalizaPedido;
