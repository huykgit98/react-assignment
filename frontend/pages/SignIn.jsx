import React from 'react';

export default function SignIn({ wallet }) {
  const signIn = () => { wallet.signIn() }

  return (
    <>
  <p>Sign in page</p>
  <button onClick={signIn}>Log in</button>
    </>
  );
}
