

const Login = () =>{
    return(
       
        <div className="container">
        <h2>Login:</h2>
        <div className="row">
            <div className="col-12 col-lg-6">
                <form >
                    <div className="form-group">
                        <label>Nome:</label>
                        <input className="form-control" type="password" placeholder="Digite sua email:" required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" type="password" placeholder="Digite sua senha:" required
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
export default Login