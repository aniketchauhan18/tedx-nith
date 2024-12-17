import SignupForm from "./signup-form";
import { AuthSearchParams } from "../sign-in/page";

export default async function SignupPage({ searchParams }: AuthSearchParams) {
  return (
    <main className="min-h-screen flex justify-center items-center w-full">
      <div className="w-full max-w-sm">
        <SignupForm redirectURL={(await searchParams)?.redirectURL} />
      </div>
    </main>
  );
}
