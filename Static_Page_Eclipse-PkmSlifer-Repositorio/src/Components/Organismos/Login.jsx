import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Aquí deberías realizar la lógica de autenticación.
    // Puedes comparar el correo electrónico y la contraseña con los valores esperados.

    const expectedEmail = "SliferAdmin@gmail.com";
    const expectedPassword = "SliferPapu#1234";

    if (email === expectedEmail && password === expectedPassword) {
      // Si la autenticación es exitosa, redirige a la vista de administrador
      navigate("/administrador");
    } else {
      // Si la autenticación falla, muestra un mensaje de error o realiza otra lógica necesaria
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link" onClick={handleRegisterClick}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
