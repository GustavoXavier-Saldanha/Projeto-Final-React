import http from "../../Componentes/http"
import Categoria from "../../Componentes/Cards/CardCategorias"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Categorias = () => {

    const [categorias, setCategoria] = useState([])
    
    useEffect(() => {
        http.get('categoria/todas')
            .then(response => {
                setCategoria(response.data)
            })
    }, [])
    
    return (
        <div className="container">
            <div className="col-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Categorias</th>
                            <th>Informações</th>
                            <th>Produtos desta categoria</th>
                            <th>Criar categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map(categoria => <tr key={categoria.id}><td>{categoria.nome}</td><td>{categoria.descricao}</td><td><Link>Detalhes</Link></td><td><Link to="/categoria/adicionar" >Adicionar</Link></td></tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
    }
   
export default Categorias
