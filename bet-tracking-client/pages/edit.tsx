import { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import AuthError from "../components/AuthError";
import styles from "../styles/Edit.module.css";

interface Props {
  statusCode: number,
  bets: {
    id: number,
    stake: number,
    odds: number,
    selection: string,
    type: string,
    event: string,
    sport: string,
    win: string,
    date: string,
  }[]
}

const Edit: NextPage<Props> = ({ statusCode, bets }) => {
  const { data: session } = useSession();

  if (!session) return <AuthError /> 
  if (statusCode !== 200) return <h1>Unknown error</h1>

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
        {
          bets.reverse().map(bet => (
            <tr>
              <td>Muokkaa</td>
              <td>{bet.stake}</td>
              <td>{bet.odds}</td>
              <td>{bet.selection}</td>
              <td>{bet.event}</td>
              <td>{bet.type}</td>
              <td>{bet.sport}</td>
              <td>{bet.win ? "Voitto": "Häviö"}</td>
              <td>{bet.date.split("T")[0]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Edit.getInitialProps = async ({ req }) => {
  const session = await getSession({ req });
  let api_key = "";
  if(session !== null) {
    api_key = session.user.accessToken;
  }
  const response = await fetch(`${process.env.API_URL}/api/bets/detail`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Api_key': api_key,
    },
  })
  .then(result => result.json())
  .then(data => {
    return data;
  });

  return {
    statusCode: response.data.statusCode,
    bets: response.data.bets
  }
}

export default Edit;