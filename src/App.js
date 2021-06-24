import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Projeto/Componentes/NavBar'
import Pagina404 from './Projeto/Paginas/Pagina404'
import Login from './Projeto/Paginas/Login'
import Categorias from './Projeto/Paginas/Categoria'
import NovaCategoria from './Projeto/Paginas/categorias/NovaCategoria'
import Produtos from './Projeto/Paginas/Produtos'
import NovoProduto from './Projeto/Paginas/produto/novoProduto'
import CadastroDados from './Projeto/Paginas/Cadastro'
import Home from './Projeto/Paginas/Home' 


function App() {

  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }


  useEffect( () => {
    const tokenAntigo = localStorage.getItem('token')
    if (tokenAntigo){
      setToken(tokenAntigo)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar token={token} aoLogout={logout}/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login onLogin={onLogin}/>
          </Route>
          <Route path ="/cadastro">
            <CadastroDados/>
          </Route>
          <Route path ="/produtos">
            <Produtos/>
          </Route>
          <Route path ="/produto">
            <NovoProduto/>
          </Route>
          <Route path ="/categoria/todas">
            <Categorias/>
          </Route>
          <Route path ="/categoria">
            <NovaCategoria/>
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
