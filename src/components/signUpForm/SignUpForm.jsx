import React from "react";
import "./SignUpForm.css";
const SignUpForm = () => {
  return (
    <div className="signUpContainer" id="container">
      <div className="container-wrapper">
        <div className="form-container signUp-container">
          <form action="#">
            <h2>Create Account</h2>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
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
        </div>
        <div className="form-container signIn-container">
          <form action="#">
            <h2>Sign in</h2>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
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
        </div>
        <div className="goTo-container">
          <div className="goTo">
            <h2>Welcome Back!</h2>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="btn">Sign In</button>
            <div className="goTo-signUp">
              <h2>Hello, Friend!</h2>
              <p>Enter your personal details and start journey with us</p>
              <button className="btn signUp-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
