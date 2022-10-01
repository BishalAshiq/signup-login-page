import React from 'react';
import TextField from "@mui/material/TextField";
import './Signup.css';
const Signup = () => {
    return (
        <div className="signup-page">
        <div className="signup-input">
        <TextField
          id="standard-email-input"
          label="Email or Username"
          type="email"
          autoComplete="current-email"
          variant="standard"
          className="text-input"
        /> <br/>
        <TextField
          id="standard-email-input"
          label="Username"
          type="name"
          autoComplete="current-name"
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
        <br/>
        <button className="signup-button">Login</button>
      </div>
    );
};

export default Signup;