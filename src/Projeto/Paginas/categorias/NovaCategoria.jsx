import { useState } from "react"
import http from '../../Componentes/http'
import './estilo.css'

const NovaCategoria = () => {

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
 

  const salvar = (evento) => {
    evento.preventDefault()
    const Categoria = {
      nome: nome,
      descricao: descricao
      
    }
    http.post('categoria', Categoria)
      .then(response => {
        console.log(response.data)
      })
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  const manipuladorNome = (evento) => {
    setNome(evento.target.value)
    
  }

  const manipuladorDescricao = (evento) => {
      setDescricao(evento.target.value)
  }
  

  return (
    <div className="row justify-content">
      <div className="col-md-6">
        <h1>Adicionar Categoria</h1>
        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={manipuladorNome} required />
          </div>
          <div className="form-group">
            <label>Descricao</label>
            <input className="form-control" value={descricao} onChange={manipuladorDescricao} required />
          </div>
          <button className="btn adicao">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default NovaCategoria