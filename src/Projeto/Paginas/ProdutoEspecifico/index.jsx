import './estilo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../Componentes/http'

const ProdutoEspecifico = ({adicionaProduto}) => {

    const [produto, setProduto] = useState([])

    const {id} = useParams()

    useEffect(() => {
        http.get('produto/' + id)
            .then(response => setProduto(response.data))
        }, [id])

    return (
        <div>
           <h1>{produto.nome}</h1>
           <h1>{produto.preco}</h1>
           <h1>{produto.descricao}</h1>

           <div className="btn-group me-2" role="group" aria-label="Second group">
               <button onClick={()=>{
                   adicionaProduto(produto)
               }} className="btn btn-dark mt-3 block"> carrinho</button>   
            </div>

        </div>
    )
}

export default ProdutoEspecifico