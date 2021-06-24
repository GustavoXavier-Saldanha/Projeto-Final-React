import './estilo.css'
import img from './converse.png'

const Pagina404 = () => {
  return (
    <div >
      <div className="alert alert-light" role="alert">
        <h1>
          Oops!</h1>
        <h2>
          404 Not Found</h2>
      </div>
      <img src={img} alt="" />
    </div>

  )
}

export default Pagina404