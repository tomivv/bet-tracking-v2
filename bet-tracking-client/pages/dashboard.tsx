import type { NextPage, NextPageContext } from 'next'
import { getSession, signIn, useSession } from 'next-auth/react';
import React from 'react';
import AuthError from '../components/AuthError';
import BetDisplay from '../components/BetDisplay';
import styles from "../styles/Dashboard.module.css";


interface Props {
  statusCode: number,
  message?: string
  betsToday: bets,
  betsWeek: bets,
  betsMonth: bets,
  betsYear: bets
}

interface bets {
  amount: number,
  odds: number,
  result: number
}

const Dashboard: NextPage<Props> = ({ statusCode, betsToday, betsWeek, betsMonth, betsYear }) => {
  const { data: session } = useSession();

  if (!session || statusCode === 401) return <AuthError /> 
  if (statusCode !== 200) return <div><h1>{statusCode}</h1></div>
  
  return (
    <div className={styles.container}>
      <h1>Veto tilastot</h1>
      <div className={styles.cards}>
        <BetDisplay title="Päivä" data={betsToday} />
        <BetDisplay title="Viikko" data={betsWeek} />
        <BetDisplay title="Kuukausi" data={betsMonth} />
        <BetDisplay title="Vuosi" data={betsYear} />
      </div>
    </div>
  );
}

interface bet {
  stake: number,
  odds: number,
  win: boolean,
  date: string
}

export async function getServerSideProps({ req }: NextPageContext) {
  const session = await getSession({ req });
  let api_key = "";
  if(session !== null) {
    api_key = session.user.accessToken;
  }
  const response = await fetch(`${process.env.API_URL}/api/bets`, {
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

  // set today at midnight
  let today = new Date(Date.now());
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  let betsToday = {
    odds: 0,
    result: 0,
    amount: 0
  }

  let betsWeek = {
    odds: 0,
    result: 0,
    amount: 0
  }

  let betsMonth = {
    odds: 0,
    result: 0,
    amount: 0
  }

  let betsYear = {
    odds: 0,
    result: 0,
    amount: 0
  }

  if (response.data.statusCode === 401) {
    return {
      props: {
        statusCode: response.data.statusCode,
        message: response.data.message,
        betsToday: betsToday,
        betsWeek: betsWeek,
        betsMonth: betsMonth,
        betsYear: betsYear
      }
    }
  }
  
  response.data.bets.forEach((bet: bet) => {
    const betTime = new Date(bet.date).getTime();
    // todays bets
    if (today.getTime() === betTime) {
      betsToday.amount += 1;
      betsToday.odds += bet.odds;
      if (bet.win) betsToday.result += 1;
    }
    // last 7 days of bets
    if (today.getTime() - 7 * 86400000 <= betTime) {
      betsWeek.amount += 1;
      betsWeek.odds += bet.odds;
      if (bet.win) betsWeek.result += 1;
    }
    // last 30 days of bets
    if (today.getTime() - 30 * 86400000 <= betTime) {
      betsMonth.amount += 1;
      betsMonth.odds += bet.odds;
      if (bet.win) betsMonth.result += 1;
    }
    // last year of bets
    if (today.getTime() - 365 * 86400000 <= betTime) {
      betsYear.amount += 1;
      betsYear.odds += bet.odds;
      if (bet.win) betsYear.result += 1;
    }
  });

  return {
    props: {
      statusCode: response.data.statusCode,
      betsToday: betsToday,
      betsWeek: betsWeek,
      betsMonth: betsMonth,
      betsYear: betsYear
    }
  }
}

export default Dashboard
