import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunicationPage.module.css"; // Importing the CSS module

function CommunicationPage() {
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Year: ${year}, Month: ${month}`);
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
      <h2>My Communications</h2>
      <p>
        Welcome <strong>Student Name</strong>
      </p>
      <div className={styles.card}>
        <label htmlFor="year">Select Year:</label>
        <select id="year" value={year} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>

        <label htmlFor="month">Select Month:</label>
        <select id="month" value={month} onChange={handleMonthChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <button onClick={handleSearch}>Search</button>
        <p>No communication yet.</p>
      </div>
    </div>
  );
}

export default CommunicationPage;
