import { useState } from 'react'
import './estilo.css'
import axios from 'axios'


const Formulario = ({ aoSalvar }) => {

    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')


    const obterCep = (evento) => {
        if (!evento.target.value) {
            return
        }
        const url = `https://viacep.com.br/ws/${evento.target.value}/json`
        axios.get(url)
            .then(response => {
                if (!response.data.erro) {
                    setRua(response.data.logradouro)
                    setBairro(response.data.bairro)
                    setEstado(response.data.uf)
                    setCidade(response.data.localidade)
                }
            })
            .catch(erro => {
                console.log(erro)
            })

    }

    const manipuladorCep = (evento) => {
        if (evento.target.value.length <= 8) {
            setCep(evento.target.value)
        }
    }

    const manipuladorNumero = (evento) => {
        setNumero(evento.target.value)
    }

    const manipuladorCidade = (evento) => {
        setCidade(evento.target.value)
    }

    const manipuladorBairro = (evento) => {
        setBairro(evento.target.value)
    }

    const manipuladorEstado = (evento) => {
        setEstado(evento.target.value)
    }

    const manipuladorRua = (evento) => {
        setRua(evento.target.value)
    }


    const salvar = (evento) => {
        evento.preventDefault()
        const endereco = {}
        endereco.cep = cep
        endereco.numero = numero
        endereco.rua = rua
        endereco.cidade = cidade
        endereco.estado = estado
        endereco.bairro = bairro
        aoSalvar(endereco)
        setCep('')
        setNumero('')
        setCidade('')
        setBairro('')
        setEstado('')
        setRua('')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6"> 
                    <form onSubmit={salvar}>
                        <div className="form-group">
                            <label>Cep</label>
                            <input required value={cep} onBlur={obterCep} onChange={manipuladorCep} />
                        </div>
                        <div className="form-group">
                            <label>Rua</label>
                            <input required value={rua} onChange={manipuladorRua} />
                        </div>
                        <div className="form-group">
                            <label>CPF</label>
                            <input required value={numero} onChange={manipuladorNumero} />
                        </div>
                        <div className="form-group">
                            <label>Bairro</label>
                            <input required value={bairro} onChange={manipuladorBairro} />
                        </div>
                        <div className="form-group">
                            <label >Cidade</label>
                            <input required value={cidade} onChange={manipuladorCidade}/>
                        </div>
                        <div className="form-group">
                            <label >Estado</label>
                            <input value={estado} onChange={manipuladorEstado}/>
                        </div>
                        <div className="form-group">
                            <button className="fas fa-cart-plus">Próximo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)}

export default Formulario

