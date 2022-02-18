import { NextPage } from "next";
import React from "react";
import styles from "../styles/Edit.module.css";

const Edit: NextPage = () => {
  return (
    <table className={styles.table}>
      <thead>
       <tr>
         <th>Muokkaa</th>
         <th>Panos</th>
         <th>Kerroin</th>
         <th>Valinta</th>
         <th>Kohde</th>
         <th>Tapa</th>
         <th>Laji</th>
         <th>Voitto</th>
         <th>Päiväys</th>
       </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}

export default Edit;