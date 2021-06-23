import { useState } from 'react'
import './estilo.css'
import axios from 'axios'
import http from '../../Componentes/http'

const CadastroDados = () => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [username, setUserName] = useState('')
    const [senha, setSenha] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const cadastrar = (evento) => {
        evento.preventDefault()
        const usuario = {
            cep: cep,
            numero: numero,
            rua: rua,
            cidade: cidade,
            estado: estado,
            bairro: bairro,
            username: username,
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            telefone: telefone,
            dataNascimento: dataNascimento
        }
        setCep('')
        setNumero('')
        setCidade('')
        setBairro('')
        setEstado('')
        setRua('')
        setUserName('')
        setNome('')
        setEmail('')
        setSenha('')
        setCpf('')
        setTelefone('')
        setDataNascimento('')

        http.post('cliente', usuario)
            .then(response => (response.data))
    }


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
    const manipuladorTelefone = (evento) => {
        setTelefone(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }
    const manipuladorUserName = (evento) => {
        setUserName(evento.target.value)
    }
    const manipuladorCpf = (evento) => {
        if (evento.target.value.length <= 11) {
            setCpf(evento.target.value)
        }
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }

    const manipuladorDataNascimento = (evento) => {
        setDataNascimento(evento.target.value)
    }



    return (
        <div className="container">
            <form className="row" onSubmit={cadastrar}>
                <h2>Cadastro</h2>
              
                    <div className="col-12 col-lg-5" id="Formularios" >
                        <h3>Dados Pessoais:</h3>
                        <div className="form-group">
                            <label>Nome:</label>
                            <input className="form-control" required type="text" value={nome} onChange={manipuladorNome} placeholder="Seu nome:" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" required type="email" value={email} onChange={manipuladorEmail} placeholder="example@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label>CPF:</label>
                            <input className="form-control" required type="text" value={cpf} onChange={manipuladorCpf} placeholder="111.111.111-11" />
                        </div>
                        <div className="form-group">
                            <label>Usuário:</label>
                            <input className="form-control" required type="text" value={username} onChange={manipuladorUserName} placeholder="Digite um Username para você" />
                        </div>
                        <div className="form-group">
                            <label >Senha:</label>
                            <input className="form-control" required type="password" value={senha} onChange={manipuladorSenha} placeholder="Digite sua senha:" />
                        </div>
                        <div className="form-group">
                            <label >Data de Nascimento:</label>
                            <input className="form-control" required value={dataNascimento} onChange={manipuladorDataNascimento} placeholder="2002-11-11" />
                        </div>

                    </div>

                    <div className="col-1 col-lg-1">
                    </div>

                    <div className="col-12 col-lg-5">
                        <h3>Endereço:</h3>
                        <div className="form-group">
                            <label>CEP:</label>
                            <input className="form-control" required value={cep} onBlur={obterCep} onChange={manipuladorCep} placeholder="12345678" />
                        </div>
                        <div className="form-group">
                            <label>Rua:</label>
                            <input className="form-control" required value={rua} onChange={manipuladorRua} />
                        </div>
                        <div className="form-group">
                            <label>Bairro:</label>
                            <input className="form-control" required value={bairro} onChange={manipuladorBairro} />
                        </div>
                        <div className="form-group">
                            <label >Cidade:</label>
                            <input className="form-control" required value={cidade} onChange={manipuladorCidade} />
                        </div>
                        <div className="form-group">
                            <label >Numero Residencial:</label>
                            <input className="form-control" required value={numero} onChange={manipuladorNumero} />
                        </div>
                        <div className="form-group">
                            <label >Estado:</label>
                            <input className="form-control" value={estado} onChange={manipuladorEstado} />
                        </div>
                    </div>


                    <div className="col-12 col-lg-5">
                        <h3>Contato:</h3>
                        <div>
                            <div className="form-group">
                                <label >Numero Celular:</label>
                                <input className="form-control" value={telefone} onChange={manipuladorTelefone} placeholder="22999999999" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">

                        <div className="btn-group me-3" role="group" aria-label="First group">
                            <button className="btn btn-dark mt-3 block">Cadastrar</button>
                        </div>
                        <div className="btn-group me-2" role="group" aria-label="Second group">
                            <button className="btn btn-dark mt-3 block">Já tem uma conta?</button>
                        </div>

                    </div>


                
            </form>
        </div>
    )



}

export default CadastroDados;