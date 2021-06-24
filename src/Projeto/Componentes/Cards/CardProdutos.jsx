import { Link } from "react-router-dom"



const CardProduto = ({ nome, preco, descricao, categoria, qtdEstoque,imagem_base64, id}) => { 
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src={imagem_base64} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{id} - {nome} - R$ {preco} - {qtdEstoque} </h5>
                                 <p class="card-text"> {categoria} - {descricao}</p>
                        </div>
                </div>
            </div>
        </div>
       
    )
}
export default CardProduto;



