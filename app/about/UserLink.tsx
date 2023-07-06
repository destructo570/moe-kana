import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserLinkProps {
  name: string;
  description: string;
  link: string;
  image?: string;
}

const UserLink: React.FC<UserLinkProps> = (props) => {
  const { name, description, link, image } = props;
  return (
    <Link href={link} className="w-full" target="_blank">
      <Button
        variant="ghost"
        className="w-full h-fit p-4 flex flex-row justify-start rounded-lg hover:dark:bg-zinc-700"
      >
        <Image
          src={image || "/user_blank_2.png"}
          alt=""
          height={60}
          width={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="text-md text-left">{name}</p>
          <p className="text-md text-left text-zinc-400 dark:text-zinc-500 font-normal">
            {description}
          </p>
        </div>
      </Button>
    </Link>
  );
};

export default UserLink;
