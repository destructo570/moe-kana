import React, { PropsWithChildren } from "react";

const ListItem: React.FC<PropsWithChildren> = (props) => {
  return <li className="my-2 ml-8">{props.children}</li>;
};

export default ListItem;
