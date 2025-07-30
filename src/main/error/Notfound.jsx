import React from "react";
import {
  NotBox,
  NotBoXConBox,
  NOtBoxContainer,
  NotBoxLink,
  NotBoxNumber,
  NotBoxText,
  NotBoxNumBox,
} from "./NotfoundST";

export default function NotfoundID() {
  return (
    <React.Fragment>
      <NotBox>
        <NOtBoxContainer>
          <NotBoxNumBox>
            <NotBoxNumber>404</NotBoxNumber>
          </NotBoxNumBox>
          <NotBoXConBox>
            <NotBoxText>Sorry this page is can't found 🧐</NotBoxText>
            <NotBoxLink to={"/"}>Back to home</NotBoxLink>
          </NotBoXConBox>
        </NOtBoxContainer>
      </NotBox>
    </React.Fragment>
  );
}
