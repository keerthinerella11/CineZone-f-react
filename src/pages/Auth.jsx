import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", signupEmail);
    localStorage.setItem("userPassword", signupPassword);
    alert("Signup successful! Please login.");
    setIsSignup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      localStorage.setItem("isAuthenticated", "true"); // <-- IMPORTANT
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="heading">
        <div className="site-title">CineZone</div>
        <div className="site-caption">
          From Classics to Hidden Gems — We've got you.
        </div>
      </div>

      <div className="container">
        {isSignup ? (
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <p className="toggle-link" onClick={() => setIsSignup(false)}>
              Already have an account? Login
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p className="toggle-link" onClick={() => setIsSignup(true)}>
              Don't have an account? Sign Up
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Auth;
