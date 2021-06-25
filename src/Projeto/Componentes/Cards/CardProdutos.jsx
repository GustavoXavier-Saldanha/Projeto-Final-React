import { Link } from "react-router-dom"
import './estilo.css'



const CardProduto = ({ nome, preco,url, id }) => {

    return (

        <div className="cardTela row row-cols-1 row-cols-md-4 g-3 ">

            <div className="col geral">
                <div className="card">

                    <img className="card-img-top" src={url} />
                    <div className="card-body">
                        <h5 className="card-title"> {nome}</h5>
                        <h5 className="card-title"> R${preco},00</h5>
                    </div>

                    <Link to={`produto/${nome}`}>
                        <button className="btn btn-dark mt-3 block">Ir para o produto</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default CardProduto;



