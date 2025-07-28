import React from "react";
import { ContainerBOX } from "./containerSL";

const Container = (props) => {
  return (
    <React.Fragment>
      <ContainerBOX>{props.children}</ContainerBOX>
    </React.Fragment>
  );
};

export default Container;
