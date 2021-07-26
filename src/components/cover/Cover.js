import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../login/LoginForm';
import './Cover.css';
import SignUpForm from '../signup/SignUpForm';
import Button from '@material-ui/core/Button';


function Cover() {
    const history = useHistory();
    const loginOnClick = useCallback(() => history.push('/login'), [history]);
    const signUpOnClick = useCallback(() => history.push('/signup'), [history]);

    useEffect(() => {
        console.log(history.location.pathname)
    })
    return (
        <div className="cover" >
            <div className="header">
                <div className="wrapper">
                    {
                        history.location.pathname === "/login" ?
                            <>
                                <div className="button">
                                    <LoginForm />
                                </div>
                            </>
                            : history.location.pathname === "/signup" ?
                                <>
                                    <div className="button">
                                        <SignUpForm />
                                    </div>
                                </> :
                                <>
                                    <div className="title">
                                        <h1>Manage all your offers and items from one place.</h1>
                                    </div>
                                    <div className="button">
                                        <Button
                                            className="button1"
                                            variant="outlined"
                                            color="black"
                                            onClick={loginOnClick}>Login</Button>
                                        <Button
                                            variant="outlined"
                                            onClick={signUpOnClick}>Signup</Button>
                                    </div>
                                </>
                    }
                </div>
                <div className="header-image">
                    <img src="https://j.top4top.io/p_2032yq0ut1.jpg" alt="" width="1000" height="700" />
                </div>
            </div >
        </div >
    )
}

export default Cover;
