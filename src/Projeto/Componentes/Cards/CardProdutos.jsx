import { Link } from "react-router-dom"

const CardProduto = ({ nome, preco, categoria, id}) => { 
    return (
        <div>
            <h3> {nome}</h3>
            <div> {preco}</div>

            <Link to={`/produtos/${id}`}>Ver detalhes </Link>
        </div>
    )
}
export default CardProduto