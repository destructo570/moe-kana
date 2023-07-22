import { ExternalLink } from "lucide-react";
import React, { PropsWithChildren } from "react";

const Link: React.FC<PropsWithChildren> = (props) => {
  return (
    <a
      className="my-2 font-bold underline underline-offset-2 flex gap-1 items-center"
      target="_blank"
      {...props}
    >
      {props.children}

      <ExternalLink size={18} />
    </a>
  );
};

export default Link;
