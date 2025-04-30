import React, { useState } from "react";
import styles from "./AdminLogin.module.css"; // ✅ Correct CSS module import
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("adminLogin");
  const [password, setPassword] = useState("adminLogin");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin Email:", email);
    console.log("Password:", password);

    if (email === "adminLogin" && password === "adminLogin") {
      alert("Login successful!");
      // No navigation for now
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.adminLoginContainer}>
      <div className={styles.adminLoginBox}>
        <h2 className={styles.adminLoginTitle}>Admin Login</h2>
        <form onSubmit={handleLogin} className={styles.adminLoginForm}>
          <div className={styles.adminInputGroup}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div className={styles.adminInputGroup}>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className={styles.adminLoginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
