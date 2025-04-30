import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DashboardPage.module.css"; // Import the CSS module

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboardBody}>
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

      <div className={styles.main}>
        <div className={styles.header}>
          <h2>All Application Form(s)</h2>
          <span>
            Welcome <strong>Student Name</strong>
          </span>
        </div>
        <div className={styles.card}>
          <h3>Presidency University Admission Form 2025 - 26</h3>
          <p>
            <strong>Application No.:</strong> -
          </p>
          <p>
            <strong>Application Submitted On:</strong> -
          </p>
          <p>
            <strong>Application Fees:</strong> ₹0.00
          </p>
          <button
            className={styles.applyButton}
            onClick={() => navigate("/register")}
          >
            Apply Now
          </button>

          <div className={styles.journeyStatus}>
            <div>
              <input type="radio" disabled /> Application Initiated
            </div>
            <div>
              <input type="radio" disabled /> Application Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
