import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QueryPage.module.css"; // Import CSS module

function QueryPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Query:", query);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebar}>
        <img src="logo.png" alt="Presidency University" />
        <button
          className={styles.active}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button onClick={() => navigate("/payments")}>My Payments</button>
        <button onClick={() => navigate("/queries")}>My Queries</button>
        <button onClick={() => navigate("/communications")}>
          My Communication
        </button>
      </div>

      <h2>My Queries</h2>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />

          <label htmlFor="query">Your Query</label>
          <textarea
            id="query"
            name="query"
            rows="6"
            placeholder="Write your query here..."
            value={query}
            onChange={handleQueryChange}
            className={styles.textarea}
          ></textarea>

          <button type="submit" className={styles.button}>
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
}

export default QueryPage;
