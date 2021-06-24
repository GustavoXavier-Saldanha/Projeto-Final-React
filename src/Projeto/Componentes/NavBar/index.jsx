import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './estilo.css'
import img from './LogoCortadoHome.png'

const NavBar = ({token, aoLogout}) => {

  const history = useHistory();

  const logout = () => {
    history.push('/login')
    aoLogout()
  }

  const Itens = () => {
    if (token) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/produtos">Produtos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicos">Serviços</Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" href="" onClick={logout}>Logout</button>
          </li>
        </>
      )
    }
    return <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cadastro">Cadastre-se</Link>
      </li>
    </>
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        
        <ul className="navbar-nav mr-auto">
        <img src={img} />
          {Itens()}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar