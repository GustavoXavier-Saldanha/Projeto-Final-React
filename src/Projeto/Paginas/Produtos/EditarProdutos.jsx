import http from '../../Componentes/http'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const EditaProduto = () => {
  
  const { id } = useParams()
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [codigo, setCodigo] = useState('')
  const [qtdEstoque, setQtdEstoque] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    http.get('produto/' + id)
      .then(response => {
        setNome(response.data.nome)
        setPreco(response.data.preco)
        setDescricao(response.data.descricao)
        setCodigo(response.data.codigo)
        setQtdEstoque(response.data.qtdEstoque)
        setCategoria(response.data.categoria)
      })
  }, [id])
  
  const salvar = (evento) => {
    evento.preventDefault()
    const produto = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      codigo: codigo,
      quantidadeEstoque : qtdEstoque,
      id: id,
      categoria: categoria
    }
    http.put('produtos/' + id, produto)
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

  const manipuladorPreco = (evento) => {
    setPreco(evento.target.value)
  }
  
  const manipuladorDescricao = (evento) => {
      setDescricao(evento.target.value)
  }

  const manipuladorCodigo = (evento) => {
      setCodigo(evento.target.value)
  }

  const manipuladorQtdEstoque = (evento) => {
    setQtdEstoque(evento.target.value)
}

const manipuladorCategoria = (evento) => {
  setCategoria(evento.target.value)
}

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Editar produto</h1>
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
            <label>Descrição</label>
            <input className="form-control" type="text" value={descricao} onChange={manipuladorDescricao} required />
          </div>
          <div className="form-group">
            <label>Codigo</label>
            <input className="form-control" type="text" value={codigo} onChange={manipuladorCodigo} required />
          </div>
          <div className="form-group">
            <label>Quantidade em estoque</label>
            <input className="form-control" type="number" value={qtdEstoque} onChange={manipuladorQtdEstoque} required />
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <input className="form-control" type="number" value={categoria} onChange={manipuladorCategoria} required />
          </div>

          <button className="btn btn-outline-dark btn-block">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default EditaProduto