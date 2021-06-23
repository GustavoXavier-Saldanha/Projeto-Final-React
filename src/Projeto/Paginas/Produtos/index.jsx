import axios from 'axios'
import CardProduto from '../../Componentes/Cards/CardProdutos'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])

    const mostrarProdutos = () => {
        axios.get('produtos').then(response => {

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

            <div>

                {produtos.map((item) => <CardProduto key={item.id} nome={item.nome} preco={item.preco} id={item.id} />)}

            </div>
        </div>
    )
}
export default Produtos