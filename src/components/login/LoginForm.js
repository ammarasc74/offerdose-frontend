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
    <div className="form">
      <h1 className="login-form-title">Hello Merchant!</h1>
      <form>
        <TextField
          style={{
            padding: "10px",
            maxWidth: "400px",
            width: "300px",
          }}
          value={email}
          required
          id="standard-required"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={{ padding: "10px", maxWidth: "400px", width: "300px" }}
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
        <div className="button">
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
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
              }}
              variant="outlined"
              onClick={() => loginRequest()}
            >
              Login
            </Button>
          )}
        </div>
        <div className="have-acc-text">
          <h4>
            Don't have an account ?{" "}
            <Link to="/offerdose-frontend/signup">Create New Account</Link>{" "}
          </h4>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
