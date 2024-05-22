function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="credentials email">
          <label>Email:</label>
          <input type="email" value={email} required />
        </div>
        <div className="credentials">
          <label>Password:</label>
          <input type="password" value={password} required />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
