import React from "react";
import TextField from "@mui/material/TextField";
import './Login.css';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-input">
      <TextField
        id="standard-email-input"
        label="Email or Username"
        type="email"
        autoComplete="current-email"
        variant="standard"
        className="text-input"
      /> <br/>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        className="text-input"
      />
      </div>
      <div className="remember">
       <Checkbox {...label} />
       <h4>Remembered me</h4>
      </div>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;
