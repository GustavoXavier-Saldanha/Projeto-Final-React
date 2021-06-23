import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Projeto/Componentes/NavBar'
import Pagina404 from './Projeto/Paginas/Pagina404'
<<<<<<< HEAD
import Login from './Projeto/Paginas/Login'
=======
import CadastroDados from './Projeto/Paginas/Cadastro/CadastroDados'
import Home from './Projeto/Paginas/Home' 

>>>>>>> 5e337c428af9b199ab499219e7a6926d27c756c8

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
          {/* <Route exact path="/">
            <Home />
          </Route> */}
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
