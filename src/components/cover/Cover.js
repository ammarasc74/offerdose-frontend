import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../login/LoginForm';
import './Cover.css';
import SignUpForm from '../signup/SignUpForm';


function Cover() {
    const history = useHistory();
    const loginOnClick = useCallback(() => history.push('/login'), [history]);
    const signUpOnClick = useCallback(() => history.push('/signup'), [history]);
    return (
        <div className="cover">
            <div className="header">
                <div>
                    <div className="title">
                        <h1>Manage all your offers and items from one place.</h1>
                    </div>
                    <div className="buttom">
                        <button className="buttom1" type="button" onClick={loginOnClick}>
                            Login
                        </button>
                        <button className="buttom2" type="button" onClick={signUpOnClick}>
                            Signup
                        </button>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Hello Merchant!
                            </h1>
                        </div>
                        <div className="buttom">
                            <LoginForm />
                        </div>
                        <div className="buttom">
                            <button className="buttom1" type="button">
                                Login
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                Welcome Merchant
                            </h1>
                            <div className="buttom">
                                <SignUpForm />
                            </div>
                            <div className="buttom">
                                <button className="buttom1" type="button">
                                    Signup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <img src="https://j.top4top.io/p_2032yq0ut1.jpg" alt="" width="1500" height="700" />
                </div>
            </div>
        </div>
    )
}

export default Cover;
