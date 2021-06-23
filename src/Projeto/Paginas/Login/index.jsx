import { useState } from "react";
import http from "../../Componentes/http"

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            email: email,
            senha: senha
        }
        http.post('auth/login', usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)
            } )

            .catch(erro => {
                console.log('A aplicação falhou!')
                console.log(erro);
            })
    }

    const manipularEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipularSenha = (evento) => {
        setSenha(evento.target.value)
    }
    return(

        <div className="container">
        <h2>Login:</h2>
        <div className="row">
            <div className="col-12 col-lg-6">
                <form onSubmit={efetuarLogin}>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input className="form-control" type="email" placeholder="Digite sua email:" required onChange={manipularEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input className="form-control" type="password" placeholder="Digite sua senha:" required onChange={manipularSenha}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary mt-3 block">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}


export default Login;