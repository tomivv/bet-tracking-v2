import React from "react";
import styles from "../styles/Dashboard.module.css";

interface Props {
  title: string,
  data: {
    odds: number,
    amount: number,
    result: number,
  }
}

const BetDisplay = ({ title, data }: Props) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.card_body}>
        <p>Kerroin</p>
        <p>{(data.odds / data.amount).toFixed(2)}</p>
      </div>
      <div className={styles.card_body}>
        <p>Tulos</p>
        <p>{(data.result / data.amount).toFixed(2)}</p>
      </div>
      <div className={styles.card_body}>
        <p>Määrä</p>
        <p>{data.amount}</p>
      </div>
    </div>
  )
  // return (
  //   <div className={styles.period}>
  //     <h1>{title}</h1>
  //     <div className={styles.row}>
  //       <div className={styles.item}>
  //         <h2>kerroin</h2>
  //         <p>{(data.odds / data.amount).toFixed(2)}</p>
  //       </div>
  //       <div className={styles.item}>
  //         <h2>Tulos</h2>
  //         <p>{(data.result / data.amount).toFixed(2)}</p>
  //       </div>
  //       <div className={styles.item}>
  //         <h2>Määrä</h2>
  //         <p>{data.amount}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default BetDisplay;