/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Thursday January 25th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 7:15:01 pm
 * ---------------------------------------------
 */

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});