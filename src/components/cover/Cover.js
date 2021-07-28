import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import "./Cover.css";
import SignUpForm from "../signup/SignUpForm";
import Button from "@material-ui/core/Button";

function Cover() {
  const history = useHistory();
  const loginOnClick = useCallback(
    () => history.push("/offerdose-frontend/login"),
    [history]
  );
  const signUpOnClick = useCallback(
    () => history.push("/offerdose-frontend/signup"),
    [history]
  );

  useEffect(() => {
    console.log(history.location.pathname);
  });
  return (
    <div className="header">
      <div className="wrapper">
        {history.location.pathname === "/offerdose-frontend/login" ? (
          <>
            <div className="form">
              <LoginForm />
            </div>
          </>
        ) : history.location.pathname === "/offerdose-frontend/signup" ? (
          <>
            <div className="form">
              <SignUpForm />
            </div>
          </>
        ) : (
          <>
            <div className="title">
              <h1>Manage all your offers and items from one place.</h1>
            </div>
            <div className="form">
              <Button
                style={{
                  padding: "8px",
                  margin: "10px",
                  backgroundColor: "black",
                  color: "white",
                }}
                variant="outlined"
                onClick={loginOnClick}
              >
                Log In
              </Button>
              <Button
                style={{
                  padding: "8px",
                  margin: "10px",
                }}
                variant="outlined"
                onClick={signUpOnClick}
              >
                Create Merchant Account
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="header-image">
        <img
          src="https://c.top4top.io/p_2034kwkll1.jpg"
          alt=""
          width="900"
          height="700"
        />
      </div>
    </div>
  );
}

export default Cover;
