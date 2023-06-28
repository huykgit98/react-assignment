import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import SignIn from './pages/SignIn';
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = ({ isSignedIn, rep, wallet }) => {
  const [posts, setPosts] = useState([]);
  const method = "get_posts";
  const from_index = 0;          
  const limit = 250;   
  
  useEffect(() => {
    rep.getPosts({ method, from_index, limit }).then(setPosts);
  }, []);
  
  return (
    <main>
      { isSignedIn
        ? 
        <Layout wallet={wallet}>
         <Home posts = {posts} />
      </Layout>
        : <SignIn  wallet={wallet}/>
      }
    </main>
  );
};

export default App;