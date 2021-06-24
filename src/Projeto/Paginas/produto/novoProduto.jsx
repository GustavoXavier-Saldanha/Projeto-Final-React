import http from "../../Componentes/http"
import { useEffect, useState } from "react"
import './estilo.css'


const NovoProduto = () => {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [url, setUrl] = useState('')
  const [descricao, setDescricao] = useState('')
  const [codigoProduto, setCodigoProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
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
      descricao: descricao,
      codigo: codigoProduto,
      quantidadeEstoque: quantidade,
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
  const manipuladorDescricao = (evento) => {
    setDescricao(evento.target.value)
  }
  const manipuladorQuantidade = (evento) => {
    setQuantidade(evento.target.value)
  }
  const manipuladorCodigoProduto = (evento) => {
    setCodigoProduto(evento.target.value)
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
            <label>Código do produto</label>
            <input type="text" value={codigoProduto} onChange={manipuladorCodigoProduto} className="form-control" />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input type="text" value={descricao} onChange={manipuladorDescricao} className="form-control" />
          </div>
          <div className="form-group">
            <label>Quantidade</label>
            <input type="text" value={quantidade} onChange={manipuladorQuantidade} className="form-control" />
          </div>
          <div className="form-group">
            <label>Imagem</label>
            <input type="text" onChange={manipuladorUrl} className="form-control" />
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