import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import "./Signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const auth = getAuth();
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleUsernameChange=(e)=>{
    setUserName(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleSignup = (e) => {
    console.log(email, userName, password);
    e.preventDefault();
  };


  return (
    <div className="signup-page">
      <form className="signup-input" onClick={handleSignup}>
        <TextField
          onBlur={handleEmailChange}
          style={{ marginBottom: 10 }}
          id="standard-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          onBlur={handleUsernameChange}
          style={{ marginBottom: 10 }}
          id="standard-name-input"
          label="Username"
          type="text"
          autoComplete="current-text"
          variant="standard"
        />{" "}
        <br />
        <TextField
          onBlur={handlePasswordChange}
          style={{ marginBottom: 10 }}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required
        />
        <br />
        <input type="submit" value="Signup" className="signup-button" />
      </form>
      <br />
    </div>
  );
};

export default Signup;
