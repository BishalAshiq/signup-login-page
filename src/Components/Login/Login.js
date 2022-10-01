import React from "react";
import TextField from "@mui/material/TextField";
import './Login.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-input">
      <TextField
        style={{marginBottom: 10}}
        id="standard-email-input"
        label="Email or Username"
        type="email"
        autoComplete="current-email"
        variant="standard"
        className="text-input"
      /> <br/>
      <TextField
        style={{marginBottom: 10}}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        className="text-input"
      />
      </form>
      <br/>
      <div className="remember">
       <Checkbox {...label} />
       <h4>Remembered me</h4>
      </div>
      <input type="submit" value="Login" className="login-button" />
    </div>
  );
};

export default Login;