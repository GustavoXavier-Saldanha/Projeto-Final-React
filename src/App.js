import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Projeto/Componentes/NavBar'
import Pagina404 from './Projeto/Paginas/Pagina404'
import Login from './Projeto/Paginas/Login'
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
            <Login/>
          </Route>
          <Route path ="/cadastro">
            <CadastroDados/>
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
