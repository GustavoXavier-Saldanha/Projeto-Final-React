import { Link } from "react-router-dom"

const CardCategoria = ({ nome, id}) => { 
    return (
        <div>
            <h3> {nome}</h3>
            
            <Link to={`/categorias/${id}`}>Ver detalhes </Link>
        </div>
    )
}
export default CardCategoria