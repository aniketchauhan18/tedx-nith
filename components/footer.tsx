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
    <div className="bg-neutral-50/60 px-5 md:px-7 lg:px-10 py-5 grid md:grid-cols-2 items-center gap-5">
      <div className="spacee-y-2">
        <div className="w-32 -mx-3">
          <Image
            src="/logo-black.png"
            className="w-full"
            alt=""
            height={60}
            width={1200}
          />
        </div>
        <p className="font-light text-xs">
          This independent TEDx event is operated under license from TED.
        </p>
      </div>
      <div className="w-full md:flex md:justify-end md:items-end">
        <div className="flex gap-3 flex-row">
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
