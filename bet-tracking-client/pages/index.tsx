import type { NextPage } from 'next'
import React from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function handleForm(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(e);
    
  }

  return (
    <div className={styles.container} onSubmit={handleForm}>
      <h1>Lisää veto</h1>
      <form className={styles.form}>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="panos">Panos</label>
            <input type="text" name="panos" id="panos" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="kohde">Kohde</label>
            <input type="text" name="kohde" id="kohde" />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="kerroin">Kerroin</label>
            <input type="text" name="kerroin" id="kerroin" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="laji">Laji</label>
            <input type="text" name="laji" id="laji" />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="lyönti">Lyönti</label>
            <input type="text" name="lyönti" id="lyönti" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="voitto">Voitto</label>
            <input type="text" name="voitto" id="voitto" />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="tapa">Lyönti tapa</label>
            <input type="text" name="tapa" id="tapa" />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="paiva">Päiväys</label>
            <input type="date" name="paiva" id="paiva" />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <button className={`${styles.btn} ${styles.btn_primary}`}>Lisää</button>
          <button className={`${styles.btn} ${styles.btn_secondary}`}>Peruuta</button>
        </div>
      </form>
    </div>
  )
}

export default Home
