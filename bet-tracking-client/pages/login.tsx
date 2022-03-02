import type { NextPage } from "next";
import { signIn } from 'next-auth/react';
import React from "react";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();

  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();    
    const formData: any = e.target
    const res: any = await signIn('credentials', {
      redirect: false,
      username: formData[0].value,
      password: formData[1].value,
      callbackUrl: `${window.location.origin}`,
    });    
    if(res.status !== 200) {
      // set error message here
    }
    if (res.url) router.push(res.url);
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
          <button className={`btn btn_primary`}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;