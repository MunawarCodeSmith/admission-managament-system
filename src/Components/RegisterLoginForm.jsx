import React, { useState } from "react";
import styles from "./RegisterLoginForm.module.css";
import { useNavigate } from "react-router-dom";

const RegisterLoginForm = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (form) => {
    setActiveTab(form);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "register" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("register")}
          >
            Register
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "login" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("login")}
          >
            Login
          </button>
        </div>

        {activeTab === "register" && (
          <form className={styles.form} onSubmit={handleRegisterSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Name *"
              required
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Enter Email Address *"
              required
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter Mobile Number *"
              required
            />
            <select className={styles.select} required>
              <option value="">Select State *</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
              <option>Maharashtra</option>
            </select>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter City *"
              required
            />
            <select className={styles.select} required>
              <option value="">Select Academic Year *</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <select className={styles.select} required>
              <option value="">Select Course *</option>
              <option>B.Tech</option>
              <option>BBA</option>
              <option>BA LLB</option>
            </select>
            <label>
              <input type="checkbox" required /> I agree to receive information
              regarding my submitted application *
            </label>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
        )}

        {activeTab === "login" && (
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter Email Address *"
              required
            />

            <div className={styles.passwordWrapper}>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password *"
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? "👁" : "🙈"}
              </span>
            </div>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterLoginForm;
