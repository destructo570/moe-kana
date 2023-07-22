import React, { PropsWithChildren } from "react";

const HeadingTwo: React.FC<PropsWithChildren> = (props) => {
  return (
    <h2 className="text-xl font-bold my-2 dark:text-zinc-300">
      {props.children}
    </h2>
  );
};

export default HeadingTwo;
