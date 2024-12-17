import { createAuthClient } from "better-auth/react";
export const { signIn, signOut, useSession, signUp } = createAuthClient({
  baseURL: "http://localhost:3000", // change this to hosting url during development
});
