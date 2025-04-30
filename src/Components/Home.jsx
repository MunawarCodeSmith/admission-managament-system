import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homesytyles.module.css"; // Import CSS module

function Home() {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/register");
  };

  const handleAdminLogin = () => {
    navigate("/adminLogin");
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img
              src="logo.png"
              alt="Presidency University Logo"
              className={styles.logoImg}
            />
          </div>
          <nav className={styles.navMenu}>
            <a href="#">Programs</a>
            <a href="#">Academics</a>
            <a href="#">International</a>
            <a href="#">Placements</a>
          </nav>
          <div className={styles.navButtons}>
            <button onClick={handleApplyNow} className={styles.admissionsBtn}>
              Admissions
            </button>
            <button onClick={handleAdminLogin} className={styles.admissionsBtn}>
              Admin Login
            </button>
            <i className={`fas fa-bars ${styles.menuIcon}`}></i>
          </div>
        </div>
      </header>

      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <ul>
            <li>
              <a href="#">Enrollment Process</a>
            </li>
            <li>
              <a href="#">Financial Assistance</a>
            </li>
            <li>
              <a href="#">Notifications</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.contactInfo}>
              <h2>Reach Us</h2>
              <div className={styles.contactSection}>
                <h3>Admission &amp; Student Support</h3>
                <p>All Admission Enquiry</p>
                <p>
                  <i className="fas fa-phone"></i> +91 123456789
                </p>
                <p>Other Related Queries</p>
                <p>
                  <i className="fas fa-phone"></i> +91 123456789
                </p>
                <p>Enquiry &amp; Admission</p>
                <p>
                  <i className="fas fa-envelope"></i> abc@gmail.com
                </p>
              </div>
              <div className={styles.addressSection}>
                <h3>University Address</h3>
                <p>
                  Itgalpura, Rajankunte, Yelahanka, Bengaluru, Karnataka, Pin:
                  560119, India.
                </p>
                <p>
                  <i className="fas fa-phone"></i> +91 123456789
                </p>
              </div>
            </div>
            <div className={styles.applyBtnContainer}>
              <button onClick={handleApplyNow} className={styles.applyBtn}>
                APPLY NOW
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
