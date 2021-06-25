import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './estilo.css'
import http from "../../http"

const EditaDados = () => {

    const { id } = useParams()
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

    useEffect(() => {
        http.get('dados/' + id)
            .then(response => {
                setNome(response.data.nome)
                setCpf(response.data.descricao)
                setUserName(response.data.descricao)
                setSenha(response.data.descricao)
                setCep(response.data.descricao)
                setEmail(response.data.descricao)
                setNumero(response.data.descricao)
                setBairro(response.data.descricao)
                setCidade(response.data.descricao)
                setEstado(response.data.descricao)
                setTelefone(response.data.descricao)
                setDataNascimento(response.data.descricao)

            })
    }, [id])

    const salvar = (evento) => {
        evento.preventDefault()
        const Dados = {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf,
            telefone: telefone,
            dataNascimento: dataNascimento,
            endereco: {
                cep: cep,
                numeroResidencia: numero,
                rua: rua,
                cidade: cidade,
                estado: estado,
                bairro: bairro
            },
            id: id
        }
        http.put('dados/' + id, Dados)
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

    const manipuladorCep = (evento) => {
        setCep(evento.target.value)
    }

    const manipuladorNumero = (evento) => {
        setNumero(evento.target.value)
    }

    const manipuladorRua = (evento) => {
        setCep(evento.target.value)
    }

    const manipuladorCidade = (evento) => {
        setCidade(evento.target.value)
    }

    const manipuladorEstado = (evento) => {
        setEstado(evento.target.value)
    }

    const manipuladorBairro = (evento) => {
        setBairro(evento.target.value)
    }

    const manipuladorUserName = (evento) => {
        setUserName(evento.target.value)
    }

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }

    const manipuladorCpf = (evento) => {
        setCpf(evento.target.value)
    }

    const manipuladorTelefone = (evento) => {
        setTelefone(evento.target.value)
    }

    const manipuladorDataNascimento = (evento) => {
        setDataNascimento(evento.target.value)
    }

    return (
        <div className="container">
            <form className="row" onSubmit={salvar}>
                <h2>Editar Dados</h2>
              
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
                            <input className="form-control" className="form-control cpf-mask" required type="number" value={cpf} onChange={manipuladorCpf} placeholder="11111111111" />
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
                            <input className="form-control" type="number" required value={cep} onBlur={obterCep} onChange={manipuladorCep} placeholder="12345678" />
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
                            <button className="btn btn-dark mt-3 block">Salvar</button>
                        </div>
                        
                    </div>


                
            </form>
        </div>
    )

}

export default EditaDados