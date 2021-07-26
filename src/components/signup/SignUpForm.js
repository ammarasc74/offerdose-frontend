import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Signup.css';




function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const signUpRequest = () => {
        const body = { name, email, password, confirmPassword }
        axios.post("https://offerdose-accounts-api.herokuapp.com/user/signup", body)
            .then((res) => console.log("res", res?.data))
            .catch((err) => console.log("err", err))
    }
    return (
        <div>
            <div>
                <h1>
                    Join Now!
                </h1>
            </div>
            <form>
                <TextField
                    required id="standard-required"
                    label="Name"
                    variant="outlined"
                    onChange={(e) =>
                        setName(e.target.value)}
                />
                <TextField
                    required id="standard-required"
                    label="Email"
                    variant="outlined"
                    onChange={(e) =>
                        setEmail(e.target.value)} />
                <TextField
                    type="password"
                    required id="standard-required"
                    label="Password"
                    variant="outlined"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
                <TextField
                    type="password"
                    required id="standard-required"
                    label="Confirm Password"
                    variant="outlined"
                    onChange={(e) =>
                        setConfirmPassword(e.target.value)} />
            </form>
            <div className="button">
                <Button
                    variant="outlined"
                    onClick={() => signUpRequest()}
                >
                    Signup
                </Button>
            </div>
            <h4>Do you have an account ? <Link to="/login">Login Now</Link> </h4>
        </div>
    )

}
export default SignUpForm;
