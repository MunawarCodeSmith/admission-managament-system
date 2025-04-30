import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentsPage.module.css"; // CSS module import

function PaymentsPage() {
  const navigate = useNavigate();
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

      <h2>My Payments</h2>
      <p>
        Welcome <strong>Student Name</strong>
      </p>
      <div className={styles.card}>
        <img
          src="no-payment.png"
          alt="No Payments"
          width="80"
          className={styles.image}
        />
        <p>You have not made any payment.</p>
      </div>
    </div>
  );
}

export default PaymentsPage;
