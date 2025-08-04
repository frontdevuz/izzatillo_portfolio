import React from "react";
import { ButtonLK } from "./LinkButtonSL";

export default function LinkButton(props) {
  const { to } = props;
  return (
    <React.Fragment>
      <ButtonLK to={to}>{props.children}</ButtonLK>
    </React.Fragment>
  );
}
