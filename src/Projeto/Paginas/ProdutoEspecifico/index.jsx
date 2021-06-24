import './estilo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../Componentes/http'


const ProdutoEspecifico = () => {

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

        </div>
    )
}

export default ProdutoEspecifico