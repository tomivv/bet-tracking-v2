import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
    <Navbar />
  )
}

export default Home
