import React from 'react';
import '../../styles/login.css';

const Login = ({ handleLogin, handleChange }) => {
  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form>
        <div>
          <label>User Name</label>
          <input type="text" id="inptUser" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="inptPass" onChange={handleChange} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
