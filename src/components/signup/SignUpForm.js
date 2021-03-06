import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import "./Signup.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const signUpRequest = () => {
    const body = { name, email, password, confirmPassword };
    setLoading(true);
    axios
      .post("https://offerdose-api-accounts.herokuapp.com/user/signup", body)
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("signup done, Log In now!");
      })
      .catch((err) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("Sign up failed, please enter a valide data");
      });
  };
  return (
    <div className="form">
      <h1 className="signup-form-title">Join Now!</h1>
      <form>
        <TextField
          style={{
            padding: "10px",
            maxWidth: "400px",
            width: "300px",
          }}
          value={name}
          required
          id="standard-required"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
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
          style={{
            padding: "10px",
            maxWidth: "400px",
            width: "300px",
          }}
          value={password}
          type="password"
          required
          id="standard-required"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          style={{
            padding: "10px",
            maxWidth: "400px",
            width: "300px",
          }}
          value={confirmPassword}
          type="password"
          required
          id="standard-required"
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
                backgroundColor: "black",
                color: "white",
              }}
              variant="outlined"
              onClick={() => signUpRequest()}
            >
              Signup
            </Button>
          )}
        </div>
        <h4 className="have-acc-text">
          Do you have an account?{" "}
          <Link to="/offerdose-frontend/login">Log In</Link>{" "}
        </h4>
      </form>
    </div>
  );
}
export default SignUpForm;
