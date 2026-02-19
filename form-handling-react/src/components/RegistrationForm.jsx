import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setErrors("All fields are required");
      return;
    }

    setErrors("");

    // Mock API simulation
    const userData = {
      username,
      email,
      password,
    };

    console.log("User Registered:", userData);
    alert("User registered successfully!");

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>User Registration (Controlled Form)</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
