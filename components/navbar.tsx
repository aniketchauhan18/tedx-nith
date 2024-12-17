"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  const session = useSession();
  const router = useRouter();

  const handleToogleMenu = () => {
    setToogleMenu((prev) => !prev);
  };

  const linkClasses: string =
    "px-5 transition-colors text-white hover:text-white cursor-pointer";
  const hamburgerMenuLinkClasses: string =
    "p-4 text-lg font-medium border-b last:border-none border-border/40 block";
  return (
    <div className="flex flex-col fixed bg-black text-white inset-x-0 top-0 border-b border-border/40 z-30">
      <nav className="md:grid grid-cols-12 top-0 flex items-center justify-between h-14 px-3 md:pl-5">
        <Link href="/" className="text-lg font-extrabold text-thunderbird-600">
          TEDxNITH
        </Link>
        <div
          className="md:col-span-11 flex items-center
         justify-end relative"
        >
          <ul className="md:flex hidden items-center">
            <li>
              <Link href="/about" className={linkClasses}>
                About
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className={linkClasses}>
                Sponsors
              </Link>
            </li>
            {session.data ? (
              <li className="flex items-center">
                <div
                  className={linkClasses}
                  onClick={async () => {
                    try {
                      await signOut({
                        fetchOptions: {
                          onSuccess: () => {
                            router.push("/");
                          },
                        },
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Sign out
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/sign-in" className={linkClasses}>
                    Sign In
                  </Link>
                </li>
                {/* <li>
                  <Link href="/sign-up" className={linkClasses}>
                    Sign Up
                  </Link>
                </li> */}
              </>
            )}
          </ul>
          <div>
            <Menu
              className="text-white overflow-hidden block md:hidden cursor-pointer"
              onClick={handleToogleMenu}
            />
          </div>
        </div>
      </nav>
      <div className="fixed top-[50px] left-0 px-4 mx-auto w-full h-auto md:hidden z-[100] bg-black">
        {toogleMenu && (
          <ul className="md:hidden block animate-menu-animation transform-gpu transition-transform duration-200ms ease-in-out">
            <li className={hamburgerMenuLinkClasses}>
              <Link href="/about">About</Link>
            </li>
            <li className={hamburgerMenuLinkClasses}>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            {session.data ? (
              <li
                onClick={async () => {
                  try {
                    await signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.push("/");
                        },
                      },
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className={`${hamburgerMenuLinkClasses} cursor-pointer`}
              >
                Sign Out
              </li>
            ) : (
              <>
                <li className={hamburgerMenuLinkClasses}>
                  <Link href="/sign-in">Sign In</Link>
                </li>
                {/* <li className={hamburgerMenuLinkClasses}>
                  <Link href="/sign-up">Sign Up</Link>
                </li> */}
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
