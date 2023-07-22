import React, { PropsWithChildren } from "react";

const HeadingOne: React.FC<PropsWithChildren> = (props) => {
  return (
    <h1 className="text-2xl font-bold my-2 dark:text-zinc-300">
      {props.children}
    </h1>
  );
};

export default HeadingOne;
