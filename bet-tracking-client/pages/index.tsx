import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import React from 'react';
import AuthError from '../components/AuthError';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) return <AuthError /> 

  return (
    <></>
  )
}

export default Home
