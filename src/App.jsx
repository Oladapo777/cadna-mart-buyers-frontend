import { useState } from "react";
import "./App.css";
import cadnaLogo from "./assets/CADNA Mart Main Logo 00 1.png";
import googleLogo from "./assets/google.png";
import facebookLogo from "./assets/facebook.png";

function App() {
  const [page, setPage] = useState("welcome");

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginCode, setLoginCode] = useState("");

  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand">
          <img src={cadnaLogo} alt="CADNA Mart Main Logo 00 1.png" />
        </div>

        {page === "welcome" && (
          <>
            <h2>Welcome to Cadna Mart</h2>
            <p className="subtitle">Sign in or create an account.</p>

            <button
              className="social-button"
              type="button"
              onClick={() => alert("Google login.")}
            >
              <img src={googleLogo} alt="Google" className="social-logo" />
              Continue with Google
            </button>

            <button
              className="social-button"
              type="button"
              onClick={() => alert("facebook login")}
            >
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
              Continue with Facebook
            </button>

            <div className="divider">
              <span></span> OR <span></span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage("setup");
              }}
            >
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="primary-button">
                Continue
              </button>
            </form>

            <p className="login-text">
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Login
              </a>
            </p>
          </>
        )}

        {page === "setup" && (
          <>
            <h2>Set up your account</h2>
            <p className="subtitle">We need you to fill up some details.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage("password");
              }}
            >
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="+234 Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit" className="primary-button">
                Confirm
              </button>
            </form>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("welcome");
                }}
              >
                Go back
              </a>
            </p>
          </>
        )}

        {page === "password" && (
          <>
            <h2>Create your password</h2>
            <p className="subtitle">
              Create a secure password for your account.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password !== confirmPassword) {
                  alert("Passwords do not match!");
                  return;
                }
                setPage("verify");
              }}
            >
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength="8"
                required
              />
              <p className="subtitle">
                Password must contain at least 8 characters.
              </p>
              <button type="submit" className="primary-button">
                Continue
              </button>
            </form>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("setup");
                }}
              >
                Go back
              </a>
            </p>
          </>
        )}

        {page === "verify" && (
          <>
            <h2>Verify your email</h2>
            <p className="subtitle">
              We've sent a 6-digit verification code to {email}.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Verification code submitted! Actual email verification will be connected later.",
                );
              }}
            >
              <input
                className="code-input"
                type="text"
                placeholder="000000"
                maxLength="6"
                inputMode="numeric"
                pattern="[0-9]{6}"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(e.target.value.replace(/\D/g, ""))
                }
                required
              />
              <button type="submit" className="primary-button">
                Verify email
              </button>
            </form>

            <p className="login-text">
              Didn't receive a code?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resending a code will be connected later.");
                }}
              >
                Resend code
              </a>
            </p>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("password");
                }}
              >
                Go back
              </a>
            </p>
          </>
        )}

        {page === "login" && (
          <>
            <h2>Welcome back</h2>
            <p className="subtitle">Login to your Cadna Mart account.</p>

            <button
              className="social-button"
              type="button"
              onClick={() => alert("Google login will be connected later.")}
            >
              <img src={googleLogo} alt="Google" className="social-logo" />
              Continue with Google
            </button>

            <button
              className="social-button"
              type="button"
              onClick={() => alert("Facebook login will be connected later.")}
            >
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
              Continue with Facebook
            </button>

            <div className="divider">
              <span></span> OR <span></span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage("login-code");
              }}
            >
              <input
                type="email"
                placeholder="Email address"
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

              <p className="login-text" style={{ textAlign: "right" }}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("forgot");
                  }}
                >
                  Forgot password?
                </a>
              </p>

              <button type="submit" className="primary-button">
                Login
              </button>
            </form>

            <p className="login-text">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("welcome");
                }}
              >
                Create account
              </a>
            </p>
          </>
        )}

        {page === "login-code" && (
          <>
            <h2>Enter verification code</h2>
            <p className="subtitle">
              Enter the 6-digit code sent to {loginEmail}.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Code submitted! Actual login verification will be connected later.",
                );
              }}
            >
              <input
                className="code-input"
                type="text"
                placeholder="000000"
                maxLength="6"
                inputMode="numeric"
                pattern="[0-9]{6}"
                value={loginCode}
                onChange={(e) =>
                  setLoginCode(e.target.value.replace(/\D/g, ""))
                }
                required
              />
              <button type="submit" className="primary-button">
                Submit
              </button>
            </form>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Go back
              </a>
            </p>
          </>
        )}

        {page === "forgot" && (
          <>
            <h2>Forgot password?</h2>
            <p className="subtitle">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage("reset-sent");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <button type="submit" className="primary-button">
                Send reset link
              </button>
            </form>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Back to login
              </a>
            </p>
          </>
        )}

        {page === "reset-sent" && (
          <>
            <h2>Request submitted!</h2>
            <p className="subtitle">
              If an account exists with this email, a password reset link will
              be sent. Please check your inbox.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("new-password")}
            >
              Continue
            </button>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Back to login
              </a>
            </p>
          </>
        )}

        {page === "new-password" && (
          <>
            <h2>Set new password</h2>
            <p className="subtitle">Create a new password for your account.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (newPassword !== confirmNewPassword) {
                  alert("Passwords do not match!");
                  return;
                }

                alert(
                  "New password submitted! Actual password reset will be connected to the backend later.",
                );
                setPage("login");
              }}
            >
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength="8"
                required
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                minLength="8"
                required
              />
              <p className="subtitle">
                Password must contain at least 8 characters.
              </p>
              <button type="submit" className="primary-button">
                Reset password
              </button>
            </form>

            <p className="login-text">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("login");
                }}
              >
                Back to login
              </a>
            </p>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
