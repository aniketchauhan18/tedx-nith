import RegisterForm from "./register-form";
import Image from "next/image";

export default function EventRegisterPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="lg:hidden h-48 flex items-center bg-neutral-950 w-full justify-center">
        <Image
          src="/logo-white.png"
          alt=""
          width={900}
          height={900}
          className="w-96"
        />
      </div>
      <div className="w-full flex-1 flex justify-center mt-32 lg:mt-0 min-h-[70vh] lg:items-center lg:h-screen max-w-sm p-3">
        <RegisterForm />
      </div>
    </main>
  );
}
