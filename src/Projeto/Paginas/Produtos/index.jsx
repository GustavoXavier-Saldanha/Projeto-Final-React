import http from '../../Componentes/http'
import CardProduto from '../../Componentes/Cards/CardProdutos'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './estilo.css'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    const mostrarProdutos = () => {
        http.get('produto/todos').then(response => {

            setProdutos(response.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }


    useEffect(() => {
        mostrarProdutos()
    }, [])

    return (
        <div className='tabela'>
            <h2>Produtos disponíveis:</h2>
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <Link to="/produtos/novo" className="btn btn-dark mt-3 block">Adicionar Produtos</Link>
            </div>
            <div className="container paraAparecer">
            <div className="row RowTelaInicial">
                {produtos.map((item) => <CardProduto key={item.id} id={item.id} nome={item.nome} preco={item.preco} url={item.url} descricao={item.descricao} />)}

            </div>
            </div>
        </div>
    )
}
export default Produtos