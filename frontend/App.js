import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Posts from './components/Posts';

const App = ({ isSignedIn, rep, wallet }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    rep.getPosts().then(setPosts);
  }, []);

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }

  return (
    <main>
      <table>
        <tr>
          <td><h1>📖 Rep social network</h1></td>
          <td>{ isSignedIn
          ? <button onClick={signOut}>Log out</button>
          : <button onClick={signIn}>Log in</button>
        }</td>
        </tr>
      </table>

      <hr />
      { isSignedIn
        ? <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
        : <SignIn/>
      }

      <hr />

      { !!posts.length && <Posts posts={posts}/> }

    </main>
  );
};

export default App;