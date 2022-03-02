import { signIn } from "next-auth/react";
import React from "react";

export default function AuthError() {
  return (
    <main>
      <h1 className="title">Please login to see contents</h1>
      <button className="btn btn_primary" onClick={() => signIn()}>Sign in</button>
    </main>
  )
}