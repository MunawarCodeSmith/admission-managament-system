import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThankYouPage.module.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.thankyouContainer}>
        <h1 className={styles.heading}>Thank You!</h1>
        <p className={styles.text}>
          Your registration has been successfully submitted.
        </p>
        <button className={styles.btnHome} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
