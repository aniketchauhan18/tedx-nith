import { FaLinkedinIn, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

interface ISocialLinks {
  icon: IconType;
  link: string;
}

export default function Footer() {
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

  return (
    <div className="bg-neutral-50 border-t px-5 md:px-7 lg:px-10 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
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
        <h2 className="md:hidden text-thunderbird-500 font-bold">
          Quick Links
        </h2>
        <ul className="space-y-1 md:space-y-0 font-medium md:flex md:items-center md:justify-around md:flex-1">
          <li className="flex items-center ">
            <Link href="/about" className="font-light">
              About
            </Link>
          </li>
          <li>
            <Link href="/speakers" className="font-light">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="font-light">
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="/register" className="font-light">
              Register
            </Link>
          </li>
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
