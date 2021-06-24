import axios from "axios"
import CardCategoria from "../../Componentes/Cards/CardCategorias"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Categorias = () => {

    const [categorias, setCategorias] = useState([])

    const mostrarCategorias = () => {
        axios.get('categoria/todas').then(response => {

            setCategorias(response.data)
        })
            .catch(erro => {
                console.log(erro)
            })
    }
    useEffect(() => {
        mostrarCategorias()
    }, [])

    return (
        <div >
              <h2>Categorias disponíveis</h2>
              <Link to="/categoria" className="btn btn-dark mt-3 block">Adicionar Categorias</Link>
            <div>
                {categorias.map((item) => <CardCategoria key={item.id} nome={item.nome} />)}

            </div>
        </div>
    )
}
export default Categorias