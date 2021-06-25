import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Projeto/Componentes/NavBar'
import Rodape from './Projeto/Componentes/Rodape'
import Pagina404 from './Projeto/Paginas/Pagina404'
import Login from './Projeto/Paginas/Login'
import Categorias from './Projeto/Paginas/Categoria'
import NovaCategoria from './Projeto/Paginas/categorias/NovaCategoria'
import EditarCategoria from './Projeto/Paginas/categorias/EditarCategoria'
import Produtos from './Projeto/Paginas/Produtos'
import NovoProduto from './Projeto/Paginas/produto/novoProduto'
import CadastroDados from './Projeto/Paginas/Cadastro'
import Home from './Projeto/Paginas/Home'
import ProdutoEspecifico from './Projeto/Paginas/ProdutoEspecifico'
import Carrinho from './Projeto/Paginas/Carrinho'
import FinalizarPedido from './Projeto/Paginas/FinalizarPedido'


function App() {

  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }


  useEffect(() => {
    const tokenAntigo = localStorage.getItem('token')
    if (tokenAntigo) {
      setToken(tokenAntigo)
    }
  }, [])

  const [carrinho, setCarrinho] = useState([]) 

  const adicionaProduto = (produto) => {
    setCarrinho([
      ...carrinho,
      produto
    ])
  }



  const excluir = (indice) => {
    carrinho.splice(indice, 1)
    setCarrinho([
      ...carrinho
    ])
  }

  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} aoLogout={logout} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login onLogin={onLogin} />
            </Route>
            <Route path="/cadastro">
              <CadastroDados />
            </Route>
            <Route exact path="/produtos">
              <Produtos />
            </Route>
            <Route exact path="/produto/:id">
              <ProdutoEspecifico adicionaProduto={adicionaProduto}/>
            </Route>
            <Route exact path="/produtos/novo">
              <NovoProduto />
            </Route>
            <Route  exact path="/categoria/todas">
              <Categorias />
            </Route>
            <Route path="/categoria/adicionar">
              <NovaCategoria />
            </Route>
            <Route path="/categoria/editar/:id">
              <EditarCategoria />
            </Route>
            <Route path ="/pedido">
            <Carrinho produtos={carrinho} excluirProduto={excluir}/>
          </Route>
          <Route path ="/finalizar/:codigo">
            <FinalizarPedido/>
          </Route>
            <Route>
              <Pagina404 />
            </Route>
          </Switch>
        </div>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
