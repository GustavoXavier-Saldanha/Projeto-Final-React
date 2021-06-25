import './estilo.css'
import img from './tenisFio.png'

const Pagina404 = () => {
  return (
    <div className="telaErro">
      <div className="alert alert-light" role="alert">
        <h2>
          Oops!</h2>
        <h3>
          404 Not Found</h3>
      </div>
      <img src={img} className="imagem404" />
    </div>

  )
}

export default Pagina404