import axios from 'axios'
import CardProduto from '../../Componentes/Cards/CardProdutos'
import { useState, useEffect } from "react";

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    const mostrarProdutos = () => {
        axios.get('produto').then(response => {

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
            <div>
                {produtos.map((item) => <CardProduto key={item.id} nome={item.nome} preco={item.preco} descricao={item.descricao}id={item.id} />)}

            </div>
        </div>
    )
}
export default Produtos