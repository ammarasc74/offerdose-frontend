import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const loginRequest = () => {
    const body = { email, password };
    setLoading(true);
    axios
      .post("https://offerdose-api-accounts.herokuapp.com/user/login", body)
      .then((res) => {
        setLoading(false);
        setEmail("");
        setPassword("");
        alert("Login done!");
      })
      .catch((err) => {
        setLoading(false);
        setEmail("");
        setPassword("");
        alert("Enter invalid email or password");
      });
  };
  return (
    <div>
      <h1>Hello Merchant!</h1>
      <form className="form-container">
        <TextField
          style={{ padding: "10px", border: "red", width: "400px" }}
          value={email}
          required
          id="standard-required"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={{ padding: "10px", width: "400px" }}
          required
          value={password}
          id="standard-required"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgetten-text">
          <Link to="/login">Forgotten password?</Link>
        </div>
        <div>
          {loading === true ? (
            <CircularProgress
              style={{
                color: "primary",
                paddingRight: "10px",
                alignItems: "center",
              }}
            />
          ) : (
            <Button
              style={{
                backgroundColor: "black",
                paddingRight: "10px",
                color: "white",
                alignItems: "center",
              }}
              variant="outlined"
              onClick={() => loginRequest()}
            >
              Login
            </Button>
          )}
        </div>
      </form>
      <div className="forget-text">
        <h4>
          Don't have an account ?{" "}
          <Link to="/offerdose-frontend/signup">Create New Account</Link>{" "}
        </h4>
      </div>
    </div>
  );
}

export default LoginForm;
