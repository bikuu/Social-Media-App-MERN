import { useState } from "react";
import "./SignUpForm.css";
import {
  UilFacebookF,
  UilGoogle,
  UilLinkedinAlt,
} from "@iconscout/react-unicons";
const SignUpForm = () => {
  const [signUp, setSignUp] = useState(false);

  function handleSignUp() {
    setSignUp(true);
  }
  function handleSignIn() {
    setSignUp(false);
  }
  const SignUp = () => {
    return (
      <form action="#">
        <h2>Create Account</h2>
        <div className="social-container">
          <UilFacebookF className="social" style={{ color: "blue" }} />
          <UilGoogle className="social" style={{ color: "green" }} />
          <UilLinkedinAlt
            className="social"
            style={{ color: "var(--iconColor)" }}
          />
        </div>
        <span>or use your email for registration</span>
        <div className="infield">
          <input type="text" placeholder="Name" className="input" />
          <label className="label"></label>
        </div>
        <div className="infield">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
          />
          <label className="label"></label>
        </div>
        <div className="infield">
          <input type="password" placeholder="Password" className="input" />
          <label className="label"></label>
        </div>
        <button className="btn signUp-btn">Sign Up</button>
      </form>
    );
  };

  const SignIn = () => {
    return (
      <form action="#">
        <h2>Sign in</h2>
        <div className="social-container">
          <UilFacebookF className="social" style={{ color: "blue" }} />
          <UilGoogle className="social" style={{ color: "green" }} />
          <UilLinkedinAlt
            className="social"
            style={{ color: "var(--iconColor)" }}
          />
        </div>
        <span>or use your account</span>
        <div className="infield">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
          />
          <label className="label"></label>
        </div>
        <div className="infield">
          <input type="password" placeholder="Password" className="input" />
          <label className="label"></label>
        </div>
        <a href="#" className="forgot">
          Forgot your password?
        </a>
        <button className="btn signUp-btn">Sign In</button>
      </form>
    );
  };

  return (
    <div className="signUpContainer">
      <div className="container-wrapper">
        <div className="form-container" style={{ left: signUp ? "40%" : "0" }}>
          {signUp ? <SignUp /> : <SignIn />}
        </div>
        <div className="goTo-container " style={{ left: signUp ? "0" : "60%" }}>
          {signUp ? (
            <div className="goTo-logIn ">
              <h2>Welcome Back!</h2>
              <p>Login and connect with new people around the world.</p>
              <button className="btn signUp-btn" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
          ) : (
            <div className="goTo-signUp ">
              <h2>Hello, Friend!</h2>
              <p>New Here ? Join Us On Our Journey.</p>
              <button className="btn signUp-btn" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
