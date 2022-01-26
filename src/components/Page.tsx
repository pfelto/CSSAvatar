import React from "react";

export const Page = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <div className="App">{props.children}</div>;
};
