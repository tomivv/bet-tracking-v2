import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
  function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();
  }
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.text_center}`}>Login page</h1>
      <form className={styles.login_form} onSubmit={handleLogin}>
        <div className={styles.form_item} >
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={styles.form_item}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className={styles.text_center}>
          <button className={`${styles.btn} ${styles.btn_primary}`}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;