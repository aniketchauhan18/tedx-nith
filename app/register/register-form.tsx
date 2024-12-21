"use client";
import { formOptions, useForm } from "@tanstack/react-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { FieldApi } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterForm({
  redirectURL,
}: {
  redirectURL?: string;
}) {
  const router = useRouter();

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
      firstName: "",
      lastName: "",
      email: "",
      // image: null, // will add ir later if needed
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      try {
        const { firstName, lastName, email } = value;
        const formObj = {
          name: `${firstName} ${lastName}`,
          email,
        };

        // fetch req
        const res = await fetch("/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObj),
        });

        const data = await res.json();
        if (res.ok) {
          form.reset();
          toast.success(
            data.message ? data.message : "User registered Successfully",
          );
          router.push(redirectURL || "/");
        }
        if (res.status === 409) {
          toast.error(data.error ? data.error : "User is already registered");
        }
      } catch (error) {
        console.log(error);
        toast.error("User registration failed");
      }
    },
  });

  const inputClasses: string = "shadow-none bg-neutral-50/30 font-normal";
  return (
    <div className="rounded-xl bg-white">
      <div className=" text-2xl md:text-3xl my-3 font-bold">
        <h2 className="-mx-0.5">Register For Event</h2>
        <p className="text-xs text-neutral-400 font-light">
          Already register?{" "}
          <Link
            href={"/"}
            className="text-thunderbird-700 hover:text-thunderbird-600 transition ease-in-out hover:underline-offset hover:underline"
          >
            Home
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
            name="firstName"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "First Name is required"
                  : value.length < 3
                    ? "First name must be at least 3 characters"
                    : undefined,
              // asynchronous validations
              onChangeAsyncDebounceMs: 300,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            // eslint-disable-next-line react/no-children-prop
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>First Name</Label>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="First Name"
                    value={field.state.value}
                    onBlur={field.handleBlur}
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
            name="lastName"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "Last Name is required"
                  : // : value.length < 3
                    //   ? "Last name must be at least 3 characters"
                    undefined,
              // asynchronous validations
              onChangeAsyncDebounceMs: 300,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in last name'
                );
              },
            }}
            // eslint-disable-next-line react/no-children-prop
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>Last Name</Label>
                  <Input
                    id={field.name}
                    type="text"
                    placeholder="Last Name"
                    value={field.state.value}
                    onBlur={field.handleBlur}
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
                    value={field.state.value}
                    placeholder="example@nith.ac.in"
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
                className="bg-thunderbird-600/90 rounded-lg border-t-2 border-b-2 border-t-thunderbird-400/35 border-b-thunderbird-700/70 w-full font-normal text-base hover:bg-thunderbird-600/95 hover:opacity-85 transition-all ease-in-out duration-150 shadow-none "
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            )}
          />
        </div>
      </form>
    </div>
  );
}
