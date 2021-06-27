import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './estilo.css'
import img from './LogoCortadoHome.png'

const NavBar = ({ token, aoLogout, user }) => {

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
            <button className="nav-link btn btn-link text-white BtnLogout" onClick={logout}>Logout</button>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cadastro/editar" >Editar Conta</Link>
          </li>
        </>
      )
    }
    return <>
      <li className="nav-item ">
        <Link className="nav-link text-white " to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/cadastro">Cadastre-se</Link>
      </li>
    </>
  }


  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
      <div className="navBarHome">
        <ul className="navbar-nav mr-auto">

          <img src={img} />

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/produtos">Produtos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/categoria/todas">Categoria</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/pedido">Carrinho</Link>
          </li>
        </ul>

        <ul className="navbar-nav mr-auto">

          {Itens()}


        </ul>
      </div>
    </nav>
  )
}

export default NavBar