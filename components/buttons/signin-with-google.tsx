import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function SignInWithGoogle({
  redirectURL,
}: {
  redirectURL?: string;
}) {
  return (
    <Button
      onClick={async () => {
        try {
          await signIn.social({
            provider: "google",
            callbackURL: decodeURIComponent(redirectURL || "/"), // change this callback url according to user flow
            errorCallbackURL: "/auth-error",
          });
        } catch (error) {
          console.error(error);
        }
      }}
      className=" shadow-none text-neutral-800 hover:bg-neutral-50/75  border-t-2 flex items-center border-b-2 rounded-lg bg-white border font-normal w-full transition ease-in-out"
    >
      <FcGoogle />
      Sign in with Google
    </Button>
  );
}
