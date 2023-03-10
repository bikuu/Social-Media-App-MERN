import { useState } from "react";
import "./SignUpForm.css";
import {
  UilFacebookF,
  UilGoogle,
  UilLinkedinAlt,
} from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../api/AuthRequest";
import { setUser } from "../../redux/slice/userSlice";
const SignUpForm = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confPassword: "",
  });

  const goTo = () => {
    setSignUp((prev) => !prev);
    setConfirmPass(false);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confPassword: "",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (data.password !== data.confPassword) return setConfirmPass(true);
      return (await signUp(data)) && setSignUp((prev) => !prev);
    } else {
      const getData = await logIn(data);
      await dispatch(setUser(getData.data));
    }
  };
  return (
    <div className="signUpContainer">
      <div className="container-wrapper">
        <div
          className="form-container"
          style={{ left: isSignUp ? "40%" : "0" }}
        >
          <form onSubmit={handleSubmit}>
            <h2>{isSignUp ? "Create Account" : "Sign in"}</h2>
            <div className="social-container">
              <UilFacebookF className="social" style={{ color: "blue" }} />
              <UilGoogle className="social" style={{ color: "green" }} />
              <UilLinkedinAlt
                className="social"
                style={{ color: "var(--iconColor)" }}
              />
            </div>
            <span>
              {isSignUp
                ? "or use your email for registration"
                : "or use your account"}
            </span>
            {isSignUp && (
              <>
                {" "}
                <div className="infield">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input"
                    name="firstname"
                    onChange={handleChange}
                    value={data.firstname}
                  />
                  <label className="label"></label>
                </div>
                <div className="infield">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input"
                    name="lastname"
                    onChange={handleChange}
                    value={data.lastname}
                  />
                  <label className="label"></label>
                </div>
              </>
            )}
            <div className="infield">
              <input
                type="email"
                placeholder="Email"
                name="username"
                className="input"
                onChange={handleChange}
                value={data.username}
              />
              <label className="label"></label>
            </div>
            <div className="infield">
              <input
                type="password"
                placeholder="Password"
                className="input"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
              <label className="label"></label>
            </div>
            {isSignUp && (
              <>
                <div className="infield">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    name="confPassword"
                    onChange={handleChange}
                    value={data.confPassword}
                  />
                  <label className="label"></label>
                </div>
                {confirmPass && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      alignSelf: "flex-end",
                      marginRight: "5px",
                    }}
                  >
                    * Password did not match
                  </span>
                )}
              </>
            )}
            <button type="submit" className="btn signUp-btn">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
        <div
          className="goTo-container "
          style={{ left: isSignUp ? "0" : "60%" }}
        >
          {isSignUp ? (
            <div className="goTo-logIn ">
              <h2>Welcome Back!</h2>
              <p>Login and connect with new people around the world.</p>
              <button className="btn signUp-btn" onClick={goTo}>
                Sign In
              </button>
            </div>
          ) : (
            <div className="goTo-signUp ">
              <h2>Hello, Friend!</h2>
              <p>New Here ? Join Us On Our Journey.</p>
              <button className="btn signUp-btn" onClick={goTo}>
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
