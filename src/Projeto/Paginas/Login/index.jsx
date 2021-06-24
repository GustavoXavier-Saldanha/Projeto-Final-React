import { useState, useEffect } from "react";
import axios from "axios"
import MensagemErro from './MensagemErro'
import { useHistory } from "react-router-dom";
import './estilo.css'

const Login = ({onLogin}) => {

    const [mensagem, setMensagem] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token')
      }, [])


    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            email: email,
            senha: senha
        }
        setEmail('')
        setSenha('')

        axios.post('http://localhost:8000/login', usuario)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
            onLogin(response.data.user, response.data.access_token)
            history.push('/')
          })
          .catch(erro => {
            console.log('Algo deu errado')
            if (erro.response.data && erro.response.data.message) {
              setMensagem(erro.response.data.message)
            } else {
              setMensagem('OPS... um erro não esperado.')
            }
            setTimeout(() => {
              setMensagem('')
            }, 4500);
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

                {mensagem && <MensagemErro msg={mensagem} /> }

                <form onSubmit={efetuarLogin}>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input className="form-control" type="email" placeholder="Digite sua email:" required onChange={manipularEmail} placeholder="example@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label>Senha:</label>
                        <input className="form-control" type="password" placeholder="Digite sua senha:" required onChange={manipularSenha}
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-dark mt-3 block">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}


export default Login;