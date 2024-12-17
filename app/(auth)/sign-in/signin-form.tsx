"use client";
import { formOptions, useForm } from "@tanstack/react-form";
import Link from "next/link";
import type { FieldApi } from "@tanstack/react-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import SignInWithGoogle from "@/components/buttons/signin-with-google";

export default function SigninForm({ redirectURL }: { redirectURL?: string }) {
  const { data } = useSession();
  if (data?.user) {
    redirect(redirectURL || "/");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
      <div className="text-xs font-normal text-red-500">
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <em>{field.state.meta.errors.join(", ")}</em>
        ) : null}
        {/* {field.state.meta.isValidating ? "Validating..." : null} */}
      </div>
    );
  }

  const formOpts = formOptions({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      try {
        const { email, password } = value;
        await signIn.email(
          {
            email,
            password,
            // todo: change this callback url
            callbackURL: decodeURIComponent(redirectURL || "/"),
          },
          {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSuccess: (ctx) => {
              // todo: add toast here
              alert("Sign in successful");
            },
            onError: (ctx) => {
              // replace this with toast
              alert(ctx.error.message);
            },
          },
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  const inputClasses: string = "shadow-none";
  return (
    <div className="p-5 rounded-xl bg-white">
      <div className="text-2xl md:text-3xl  my-3 font-semibold">
        <h2>Welcome Back</h2>
        <p className="text-sm text-neutral-400 font-thin">
          New here?{" "}
          <Link
            href={
              redirectURL
                ? `/sign-up?redirectURL=${encodeURIComponent(redirectURL)}`
                : "/sign-up"
            }
            className="text-thunderbird-700 hover:text-thunderbird-600 transition ease-in-out hover:underline-offset hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-1"
      >
        <div>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) {
                  return "Email is required";
                }
                return undefined;
              },
              // asynchronous validations
              onChangeAsyncDebounceMs: 300,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes("error") && "Email must be valid";
              },
            }}
            // eslint-disable-next-line react/no-children-prop
            children={(field) => {
              return (
                <>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@nith.ac.in"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={inputClasses}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          ></form.Field>
        </div>
        <div>
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "Password required"
                  : value.length < 6
                    ? "Password must contain at least 6 characters"
                    : undefined,
              // asynchronous validations
              onChangeAsyncDebounceMs: 300,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in password'
                );
              },
            }}
            // eslint-disable-next-line react/no-children-prop
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>Password</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    placeholder="******"
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={inputClasses}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          ></form.Field>
        </div>
        <div className="w-full flex justify-center pt-2">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            // eslint-disable-next-line react/no-children-prop
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                disabled={!canSubmit}
                className="bg-thunderbird-600/90 rounded-lg border-t-2 border-b-2 border-t-thunderbird-500/35 border-b-thunderbird-700/70 w-full text-base hover:bg-thunderbird-600/95 transition ease-in-out shadow-none"
                // handling better-auth submission logic above
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            )}
          />
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="border-b border-neutral-300 flex-1 block"></div>
          <p className="text-neutral-600 font-medium text-xs">OR</p>
          <div className="border-b border-neutral-300 flex-1 block"></div>
        </div>
        <SignInWithGoogle redirectURL={redirectURL} />
      </form>
    </div>
  );
}
