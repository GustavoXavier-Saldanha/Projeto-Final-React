const FormularioLogin = () => {
    return (

        <form>
            <h2>Login</h2>
            <div>
                <ul>
                    <li>
                        <label>E-mail</label>
                        <input type="email" placeholder="Digite seu e-mail:" required />
                    </li>
                    <li>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha:" required />
                    </li>
                </ul>


                <button>Login</button>
            </div>
        </form>

    )

}
export default FormularioLogin;