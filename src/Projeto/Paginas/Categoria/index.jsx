import http from "../../Componentes/http"

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
                <div>
                    <h4>Adicionar Categoria</h4>
                    <Link to="/categoria/adicionar" ><button className="btn btn-dark mt-3 block">Criar Categoria</button></Link>
                    

                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Categorias</th>
                            <th>Informações</th>
                            <th>Produtos desta categoria</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map(categoria => <tr key={categoria.id}><td>{categoria.nome}</td><td>{categoria.descricao}</td><td><Link className="btn btn-dark">Ver produtos</Link></td><td><Link to="/categoria/editar" className="btn btn-warning ">Editar Categoria</Link></td></tr>)}
                    
                   
                    </tbody>
                </table>
            </div>
        </div>
    )
    }
   
export default Categorias
