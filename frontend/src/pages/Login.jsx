import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginError } from "../redux/user/authSlice";
import Button from "../composants/Button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          errorData.message || "Une erreur s'est produite lors de la connexion"
        );
      } else {
        const data = await response.json();
        const token = data.body.token;
        dispatch(loginSuccess({ token }));
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(loginError({ error }));
    }
  };

  return (
    <>
      <main className="bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button className="sign-in" type="submit">
              Sign In
            </Button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
