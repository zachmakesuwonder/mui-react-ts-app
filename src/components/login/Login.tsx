/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Wednesday January 24th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 2:52:53 pm
 * ---------------------------------------------
 */

import { useSession, signIn, signOut} from "next-auth/react"
import { Avatar, Button } from "@mui/material";

const Login = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name as string;
  if (session) { 
    return <>
      Signed in as {session?.user?.email} <br />
      <p>Welcome {userName}</p>
    </>
  }
  return (
    <>
      Please login <br />
      <Button variant={"contained"} color={"success"} onClick={()=> signIn()}>Sign in</Button>
    </>
  )
}

export default Login
