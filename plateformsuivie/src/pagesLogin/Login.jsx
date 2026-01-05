import "../styles/login.css";

function Login() {
  return (
    <>
    <div className="login-container">
      <h2>Connexion</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
        <a href="#">Mot de passe oublié ?</a>
      </form>
    </div>
    </>
  );
}

export default Login;
