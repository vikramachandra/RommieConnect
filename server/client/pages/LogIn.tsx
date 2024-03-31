import React from "react";
import styles from "../styles/Login.module.css";

export default function LogIn() {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <form action="">
            <h1 className={styles.loginTitle}>Log In</h1>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className={styles.inputBox}>
              <input type="password" placeholder="Password" required />
            </div>

            <h2 className={styles.passwordDescription}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </h2>

            <div className={styles.registerLink}>
              <p>
                Do not have an account? <a href="#">SignUp</a>
              </p>
            </div>
            <button type="submit" className={styles.logInButton}>
              Log In
            </button>

            <h3 className={styles.RommieConnect}>RommieConnect</h3>
          </form>
        </div>
      </div>
    </div>
  );
}
