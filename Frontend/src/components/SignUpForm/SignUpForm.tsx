import { useState } from "react";
import "./Signup.css";

function Register() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage(`Thanks for registering, ${email}!`);
    setEmail("");
  }

  return (
    <div className="registerContainer">
      <h1>Register for future updates:</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Register;
