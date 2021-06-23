import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import img from './burger_line_list_menu_nav_navigation_option_icon_123231 (1).png'

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
      
    <nav className="navbar">
         <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <span className="navbar-toggler-icon"><img src={img} alt="menu-bars" id="menu-burguer"></span>
          </button> 
         </div>
    </nav>
  )
}

export default NavBar