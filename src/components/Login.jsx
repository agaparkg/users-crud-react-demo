import { useState } from "react";

function Login({ setLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fetchToken = async () => {
      try {
        const res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
          // body: JSON.stringify({
          //   email: formData.email,
          //   password: formData.password
          // })
        });

        if (!res.ok) {
          throw new Error("Invalid email or password provided.");
        }

        const data = await res.json();

        localStorage.setItem("token", data.token);
        setLoggedIn(true);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchToken();
  };

  const handleFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const { email, password } = formData;

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="credentials email">
          <label>Email:</label>
          <input
            onChange={handleFormDataChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </div>
        <div className="credentials">
          <label>Password:</label>
          <input
            onChange={handleFormDataChange}
            type="password"
            name="password"
            value={password}
            required
          />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && (
          <p className="error" style={{ color: "red" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
