"use client";
import { FaLinkedinIn, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import clsx from "clsx";
import { IconType } from "react-icons/lib";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ISocialLinks {
  icon: IconType;
  link: string;
}

export default function Footer() {
  const pathName = usePathname();

  const socialLinks: ISocialLinks[] = [
    {
      icon: FaFacebookSquare,
      link: "http://www.facebook.com/TED",
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/ted",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/ted-conferences",
    },
    {
      icon: IoLogoTiktok,
      link: "https://www.tiktok.com/@tedtoks?lang=en",
    },
    {
      icon: RiTwitterXLine,
      link: "http://twitter.com/TEDTalks",
    },
  ];

  const links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Speakers",
      link: "/speakers",
    },
    {
      name: "Sponsors",
      link: "/sponsors",
    },
    {
      name: "Register",
      link: "/register",
    },
  ];

  return (
    <div className="bg-neutral-50 border-t px-5 md:py-10 md:px-7 lg:px-10 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
      <div className="space-y-1">
        <div className="w-32 -mx-3">
          <Image
            src="/logo-black.png"
            className="w-full"
            alt=""
            height={60}
            width={1200}
          />
        </div>
        <p className="font-light text-xs max-w-[15rem]">
          This independent TEDx event is operated under license from TED.
        </p>
      </div>
      <div className="md:flex flex-1">
        <h2 className="md:hidden text-[#EB0028] font-bold">Quick Links</h2>
        <ul className="space-y-1 md:space-y-0 font-medium md:flex md:items-center md:justify-around md:flex-1">
          {links.map((link) => {
            return (
              <li key={link.name} className="flex items-center">
                <Link
                  href={link.link}
                  className={clsx("font-light", {
                    "text-[#EB0028]": pathName === link.link,
                  })}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:flex md:justify-end md:items-end">
        <div className="md:flex flex justify-around gap-3">
          {socialLinks.map((social) => {
            return (
              <Link key={social.link} href={social.link} target="_blank">
                <social.icon className="text-lg" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
