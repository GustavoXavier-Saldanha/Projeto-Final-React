import axios from "axios"
import CardCategoria from "../../Componentes/Cards/CardCategorias"

const Categorias = () => {

    const [categorias, setCategorias] = useState([])

    const mostrarCategorias = () => {
       axios.get('categorias').then(response => {
           
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
            
            

            <div>
                
                    
                    {categorias.map((item) => <CardCategoria key={item.id} nome={item.nome} />)}

             


            </div>
        </div>
    )
}
export default Categorias