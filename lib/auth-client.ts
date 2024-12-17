import { createAuthClient } from "better-auth/react";
// import { config } from "dotenv";

// config({ path: ".env" })

export const { signIn, signOut, useSession, signUp } = createAuthClient({
  baseURL: "https://tedx-nith.vercel.app", // change this to hosting url during development
});
