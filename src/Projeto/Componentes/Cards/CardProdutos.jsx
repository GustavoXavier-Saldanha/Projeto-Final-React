import { Link } from "react-router-dom"


const CardProduto = ({ nome, preco,descricao,categoria, id}) => { 
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src="" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{nome} - R$ {preco}</h5>
                                 <p class="card-text">{descricao}</p>
                        </div>
                </div>
            </div>
        </div>
       
    )
}
export default CardProduto;



