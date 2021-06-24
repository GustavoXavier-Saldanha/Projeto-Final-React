import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './estilo.css'
import http from "../../http"

const EditaCategoria = () => {
  
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
  
    useEffect(() => {
      http.get('categorias/' + id)
        .then(response => {
          setNome(response.data.nome)
          setDescricao(response.data.descricao)
        })
    }, [id])
    
    const salvar = (evento) => {
      evento.preventDefault()
      const Categoria = {
        nome: nome,
        descricao: descricao,
        id: id
      }
      http.put('Categorias/' + id, Categoria)
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
      setPreco(evento.target.value)
    }
  
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Editar Categoria</h1>
          <form onSubmit={salvar}>
            <div className="form-group">
              <label>Nome</label>
              <input className="form-control" value={nome} onChange={manipuladorNome} required />
            </div>
            <div className="form-group">
              <label>Descrição</label>
              <input className="form-control" type="text" value={descricao} onChange={manipuladorDescricao} required />
            </div>
            <button className="btn btn-outline-dark btn-block">
              Salvar
            </button>
          </form>
        </div>
      </div>
    )
  
  }
  
  export default EditaCategoria