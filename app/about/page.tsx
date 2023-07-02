import React from "react";
import UserLink from "./UserLink";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Card className="w-full flex flex-col justify-center p-6 dark:bg-zinc-800 dark:border-none">
        <div className="w-full flex flex-col items-center gap-3 justify-center">
          <Image
            src="https://github.com/destructo570.png"
            alt="@shadcn"
            height={100}
            width={100}
            className="rounded-full"
          />
          <div className="flex flex-col align center justify-center mt-4 text-center">
            <p>Vishal Kashi</p>
            <p className="text-zinc-500 text-sm">Software developer</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <Link href="https://github.com/destructo570" target="_blank">
            <Github />
          </Link>
          <Link href="https://twitter.com/destructo570" target="_blank">
            <Twitter />
          </Link>
          <Link href="https://www.destructo.dev/" target="_blank">
            <Globe />
          </Link>
        </div>
      </Card>
      <Card className="p-6 mt-4 dark:bg-zinc-800 dark:border-none ">
        <h3 className="font-bold">Credits</h3>
        <div className="grid md:grid-cols-2 gap-2 mt-4">
          <UserLink
            name="Shadcn"
            description="UI components library"
            link="https://twitter.com/shadcn"
            image="/shadcn_profile.jpg"
          />
          <UserLink
            name="DJTKana"
            description="Image and audio assets"
            link="https://djtguide.neocities.org/"
          />
        </div>
      </Card>
    </>
  );
};

export default About;
