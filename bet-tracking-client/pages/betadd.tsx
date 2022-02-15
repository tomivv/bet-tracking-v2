import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

interface betForm {
  panos: number,
  kohde: string,
  kerroin: number,
  laji: string,
  lyonti: string,
  voitto: string,
  tapa: string,
  paivays: string,
}

const Betadd: NextPage = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState<betForm>({
    panos: 0,
    kohde: "",
    kerroin: 0,
    laji: "",
    lyonti: "",
    voitto: "",
    tapa: "",
    paivays: "",
  });
  const [messageBox, setMessageBox] = useState("");
  
  if (!session) {
    return (
      <>
        <h1>Not signed in</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }

  async function handleForm(e: React.SyntheticEvent) {
    e.preventDefault();
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
      body: JSON.stringify(formData)
    })
    .then(result => result.json())
    .then(data => {
      return data;
    });
    if (response.data.statusCode === 200) {
      setMessageBox(response.data.message);
      setFormData({
        panos: 0,
        kohde: "",
        kerroin: 0,
        laji: "",
        lyonti: "",
        voitto: "",
        tapa: "",
        paivays: "",
      });
    }
    console.log(response);
    
  }

  function handleNumberInput(e: any) {
    e.preventDefault();
    if (e.target.id === "kerroin") setFormData({...formData, kerroin: parseFloat(e.target.value)});
    if (e.target.id === "panos") setFormData({...formData, panos: parseFloat(e.target.value)});    
  }

  return (
    <div className={styles.container} onSubmit={handleForm} >
      <h1>Lisää veto</h1>
      <form className={styles.form}>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="panos">Panos</label>
            <input type="text" name="panos" id="panos" onChange={handleNumberInput} required />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="kohde">Kohde</label>
            <input type="text" name="kohde" id="kohde" value={formData.kohde} onChange={e => setFormData({...formData, kohde: e.target.value})} required />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="kerroin">Kerroin</label>
            <input type="text" name="kerroin" id="kerroin" onChange={handleNumberInput} required />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="laji">Laji</label>
            <input type="text" name="laji" id="laji" value={formData.laji} onChange={e => setFormData({...formData, laji: e.target.value})} required />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="lyönti">Lyönti</label>
            <input type="text" name="lyönti" id="lyönti" value={formData.lyonti} onChange={e => setFormData({...formData, lyonti: e.target.value})} required />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="voitto">Voitto</label>
            <input type="text" name="voitto" id="voitto" value={formData.voitto} onChange={e => setFormData({...formData, voitto: e.target.value})} required />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <div className={styles.form_item}>
            <label htmlFor="tapa">Lyönti tapa</label>
            <input type="text" name="tapa" id="tapa" value={formData.tapa} onChange={e => setFormData({...formData, tapa: e.target.value})} required />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="paiva">Päiväys</label>
            <input type="date" name="paiva" id="paiva" value={formData.paivays} onChange={e => setFormData({...formData, paivays: e.target.value})} required />
          </div>
        </div>
        <div className={styles.form_inline_group}>
          <button className={`${styles.btn} ${styles.btn_primary}`}>Lisää</button>
          <button className={`${styles.btn} ${styles.btn_secondary}`}>Peruuta</button>
        </div>
      </form>
      <div className={styles.text_center}>
        <h2>{messageBox}</h2>
      </div>
    </div>
  )
}

export default Betadd
