import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import styles from '../styles/Home.module.css'
import { Form, Formik } from 'formik';

interface betForm {
  stake: number,
  odds: number,
  selection: string,
  type: string,
  event: string,
  sport: string,
  win: string,
  date: string,
}

const Betadd: NextPage = () => {
  const { data: session } = useSession();
  
  if (!session) {
    return (
      <>
        <h1>Not signed in</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }

  const initialValues: betForm = {
    stake: 0,
    odds: 0,
    selection: "",
    type: "",
    event: "",
    sport: "",
    win: "",
    date: ""
  }

  return (
    <div className={styles.container} >
      <h1>Lisää veto</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values: betForm, actions) => {
          let api_key = "";
          if(session !== null) {
            api_key = session.user.accessToken;
          }
          const response = await fetch(`${process.env.API_URL}/api/bets`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Api_key': api_key
            },
            body: JSON.stringify(values)
          })
          .then(result => result.json())
          .then(data => {
            return data;
          });
        
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_item}>
              <label htmlFor="stake">Panos</label>
              <input
                type="text"
                name="stake"
                id="stake"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.stake} required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="odds">Kerroin</label>
              <input
                type="text"
                name="odds"
                id="odds"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.odds}
                required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="event">Kohde</label>
              <input
              type="text"
              name="event"
              id="event"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.event}
              required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="selection">Lyönti</label>
              <input
              type="text"
              name="selection"
              id="selection"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.selection}
              required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="sport">Laji</label>
              <input
              type="text"
              name="sport"
              id="sport"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sport}
              required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="win">Voitto</label>
              <input
              type="text"
              name="win"
              id="win"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.win}
              required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="type">Lyönti tapa</label>
              <input
              type="text"
              name="type"
              id="type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
              required />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="date">Päiväys</label>
              <input
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              required />
            </div>
            <div className={styles.form_inline_group}>
              <button type="submit" className={`${styles.btn} ${styles.btn_primary}`}>Lisää</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Betadd