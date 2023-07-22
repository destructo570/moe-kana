import React, { PropsWithChildren } from "react";

const List: React.FC<PropsWithChildren> = (props) => {
  return <ul className="list-disc my-2">{props.children}</ul>;
};

export default List;
