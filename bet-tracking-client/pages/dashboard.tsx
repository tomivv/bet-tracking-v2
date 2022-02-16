import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import styles from '../styles/Dashboard.module.css';


const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }

  return (
    <div className="container">
      <div className={styles.period}>
        <h1>Päivä</h1>
        <div className={styles.row}>
          <div className={styles.item}>
            <h2>kerroin</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Tulos</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Määrä</h2>
            <p>2.4</p>
          </div>
        </div>
      </div>
      <div className={styles.period}>
        <h1>Viikko</h1>
        <div className={styles.row}>
          <div className={styles.item}>
            <h2>kerroin</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Tulos</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Määrä</h2>
            <p>2.4</p>
          </div>
        </div>
      </div>
      <div className={styles.period}>
        <h1>Kuukausi</h1>
        <div className={styles.row}>
          <div className={styles.item}>
            <h2>kerroin</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Tulos</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Määrä</h2>
            <p>2.4</p>
          </div>
        </div>
      </div>
      <div className={styles.period}>
        <h1>Vuosi</h1>
        <div className={styles.row}>
          <div className={styles.item}>
            <h2>kerroin</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Tulos</h2>
            <p>2.4</p>
          </div>
          <div className={styles.item}>
            <h2>Määrä</h2>
            <p>2.4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
