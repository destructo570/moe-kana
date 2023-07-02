import React from "react";
import UserLink from "./UserLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Card className="w-full flex flex-col justify-center p-6 dark:bg-zinc-800 dark:border-none">
        <div className="w-full flex justify-center">
          <Image
            src="https://github.com/destructo570.png"
            alt="@shadcn"
            height={100}
            width={100}
            className="rounded-full"
          />
        </div>
        <p className="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt metus eget lorem pellentesque ultrices. Duis non dapibus
          leo. Nulla nec eleifend lectus, in porttitor risus. Praesent tristique
          porttitor lacinia. Ut ultricies gravida tortor a porttitor. Vivamus
          semper euismod cursus. Mauris convallis, purus congue sagittis auctor,
          odio arcu maximus risus, pretium fringilla tortor odio imperdiet
        </p>
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
