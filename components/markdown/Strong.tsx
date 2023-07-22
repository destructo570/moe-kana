import React, { PropsWithChildren } from "react";

const Strong: React.FC<PropsWithChildren> = (props) => {
  return (
    <strong className="my-2 font-bold dark:text-zinc-200">
      {props.children}
    </strong>
  );
};

export default Strong;
