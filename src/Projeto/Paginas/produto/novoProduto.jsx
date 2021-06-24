import http from "../../Componentes/http"
import { useEffect, useState } from "react"
import './estilo.css'


const NovoProduto = () => {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [url, setUrl] = useState('')
  const [categoriaId, setCategoriaId] = useState(0)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    http.get('categoria/todas')
      .then(response => setCategorias(response.data))
  }, [])

  const salvar = (evento) => {
    evento.preventDefault()
    const produto = {
      nome: nome,
      url: url,
      preco: preco,
      categoria: {
      id: categoriaId
      }
    }

    console.log(produto)
    http.post('produto', produto)
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

  const manipuladorCategoria = (evento) => {
    setCategoriaId(evento.target.value)
  }

  const manipuladorPreco = (evento) => {
    setPreco(evento.target.value)
  }


  const manipuladorUrl = (evento) => {
    setUrl(evento.target.value)
  }

  return (
    <div className="row justify-content">
      <div className="col-md-6">
        <h1>Adicionar produto</h1>
        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={manipuladorNome} required />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input className="form-control" type="number" step="0.01" value={preco} onChange={manipuladorPreco} required />
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <select value={categoriaId} onChange={manipuladorCategoria} className="form-control">
              <option>Selecione</option>
          
              {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Imagem</label>
            <input type="text" onChange={manipuladorUrl} className="form-control arquivoImagem" />
          </div>
          <button className="btn adicao">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default NovoProduto