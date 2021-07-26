import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Login.css';



function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginRequest = () => {
        const body = { email, password }
        axios.post("https://offerdose-accounts-api.herokuapp.com/user/login", body)
            .then((res) => console.log("res", res?.data))
            .catch((err) => console.log("err", err))
    }
    return (
        <div>
            <div>
                <h1>
                    Hello Merchant!
                </h1>
            </div>
            <form className="form-container">
                <TextField
                    required id="standard-required"
                    label="Email"
                    variant="outlined"
                    onChange={(e) =>
                        setEmail(e.target.value)}
                />
                <TextField
                    required id="standard-required"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) =>
                        setPassword(e.target.value)}
                />
                <div className="forget-text">
                    <Link to="/login">Forget password?</Link>
                </div>
            </form>
            <div className="button">
                <Button
                    variant="outlined"
                    onClick={() => loginRequest()}>
                    Login
                </Button>
            </div>
            <div className="forget-text">
                <h4>Don't have an account ? <Link to="/signup">Signup Now</Link> </h4>
            </div>
        </div>
    )
}

export default LoginForm;
