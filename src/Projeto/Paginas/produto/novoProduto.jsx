import http from "../../Componentes/http"
import { useEffect, useState } from "react"

const NovoProduto = () => {

  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [arquivo, setArquivo] = useState('')
  const [categoriaId, setCategoriaId] = useState(0)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    http.get('categorias')
      .then(response => setCategorias(response.data))
  }, [])

  const salvar = (evento) => {
    evento.preventDefault()
    const produto = {
      nome: nome,
      preco: preco,
      imagem: arquivo,
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

  const reader = new FileReader();

  const manipuladorArquivo = (evento) => {
    const arquivos = evento.target.files;
    const arquivo = arquivos[0];
    reader.readAsDataURL(arquivo);
    reader.onload = () => {
      setArquivo(reader.result);
    };
  }

  return (
    <div className="row justify-content-center">
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
              {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Imagem</label>
            <input type="file" onChange={manipuladorArquivo} className="form-control-file" />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default NovoProduto