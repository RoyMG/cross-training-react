import React, { Fragment } from 'react';
import '../../styles/login.css';

const Login = ({ handleLogin, handleChange, inptPass, inptUser }) => {
  return (
    <Fragment>
      <div className="bg-container" />
      <div className="login-wrapper">
        <h1>Login</h1>
        <form>
          <div className="formgrp">
            <label>User Name</label>
            <input type="text" id="inptUser" onChange={handleChange} />
          </div>
          <div className="formgrp">
            <label>Password</label>
            <input type="password" id="inptPass" onChange={handleChange} />
          </div>
          <button onClick={handleLogin} disabled={!(inptPass && inptUser)}>
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
