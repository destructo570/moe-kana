import React, { PropsWithChildren } from "react";

const HeadingThree: React.FC<PropsWithChildren> = (props) => {
  return (
    <h3 className="text-lg font-bold my-2 dark:text-zinc-300">
      {props.children}
    </h3>
  );
};

export default HeadingThree;
