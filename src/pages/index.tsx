import Dashboard from "./dashboard";

import { useSession } from "next-auth/react"
import Login from "@/components/Login";
import classes from './Home.module.scss'
import React from 'react';

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <main className={`${classes.main}`}>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
    </>
  );
}

export default Home;