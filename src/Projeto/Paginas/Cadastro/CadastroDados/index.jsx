import { Link } from "react-router-dom"
import { useState } from "react"

const CadastroDados = () => {


    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [email,setEmail] = useState('')

    const cadastrar = (evento) => {
        evento.preventDefault();
        const usuario = {
            username: username,
            nome: nome,
            email: email,
            senha: senha
        }
            .post('', usuario)
            .then(response => (response.data))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6"> 
                    <form onSubmit={cadastrar}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input required type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input required type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>CPF</label>
                            <input required type="text" value={cpf} onChange={(evento) => setCpf(evento.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Usuário</label>
                            <input required type="text" value={username} onChange={(evento) => setUsername(evento.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Senha</label>
                            <input required type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                        </div>
                        <div className="form-group">
                            <button className="fas fa-cart-plus"><Link to="/cadastro-endereco">Próximo</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )



}

export default CadastroDados;