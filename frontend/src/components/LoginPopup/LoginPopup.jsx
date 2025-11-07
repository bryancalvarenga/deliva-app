import React, { useState } from "react";
import "./LoginPopup.css";
import assets from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [authMode, setAuthMode] = useState("login");

  const isLogin = authMode === "login";

  return (
    <div className="auth-modal">
      <form className="auth-modal__container">
        <div className="auth-modal__header">
          <h2 className="auth-modal__title">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <button
            type="button"
            className="auth-modal__close"
            onClick={() => setShowLogin(false)}
          >
            <img src={assets.cross_icon} alt="Close" />
          </button>
        </div>

        <div className="auth-modal__inputs">
          {!isLogin && (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>

        <button className="auth-modal__submit">
          {isLogin ? "Login" : "Create account"}
        </button>

        <label className="auth-modal__terms">
          <input type="checkbox" required />
          <span>
            By continuing, I agree to the Terms of Use & Privacy Policy.
          </span>
        </label>

        {isLogin ? (
          <p className="auth-modal__switch">
            Don't have an account?{" "}
            <span onClick={() => setAuthMode("signup")}>Create one</span>
          </p>
        ) : (
          <p className="auth-modal__switch">
            Already have an account?{" "}
            <span onClick={() => setAuthMode("login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
