import React, { PropsWithChildren } from "react";

const Paragraph: React.FC<PropsWithChildren> = (props) => {
  return (
    <p className="my-2 font-normal dark:font-light dark:text-zinc-400">
      {props.children}
    </p>
  );
};

export default Paragraph;
