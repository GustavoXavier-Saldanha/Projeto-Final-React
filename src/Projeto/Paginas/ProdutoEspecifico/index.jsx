import './estilo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../Componentes/http'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ProdutoEspecifico = ({ adicionaProduto}) => {

    const [produto, setProduto] = useState([])
    const history = useHistory();

    const { id } = useParams()

    useEffect(() => {
        http.get('produto/' + id)
            .then(response => setProduto(response.data))
    }, [id])

function excluirProduto(){
    http.delete('produto/' + produto.id)
    .then(console.log("Produto deletado"))
    .catch(erro => console.log(erro))
    history.push('/produtos')
}

    return (
        <div className="tenisEspecifico">
            <div className="container">
                <div className="row">

                    <div className=" col-12 col-lg-3">
                        <h1>{produto.nome}</h1>
                        <h5>{produto.descricao}</h5>
                    
                    </div>

                    <div className=" col-12 col-lg-6">
                        <img src={produto.url} className="img-fluid" />
                    </div>

                    <div className=" col-12 col-lg-3">
                        <h3 className="freteGreen">Frete gratis</h3>
                        <h3>R${produto.preco},00</h3>


                        <div className="btn-group me-2" >
                            <button onClick={() => {
                                adicionaProduto(produto)
                            }} className="btn btn-dark mt-3 block">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/produtos" className="btn mt-3 block">🠔 Voltar para Produtos </Link>

                <button onClick={() => {
                    excluirProduto(produto)
                }} className="btn btn-danger mt-3 block">Excluir produto</button>
            </div>
        </div>
    )
}

export default ProdutoEspecifico