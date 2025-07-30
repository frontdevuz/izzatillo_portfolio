import React, { useState, useEffect } from "react";
import { UpButtonBox, UpButtonContainer, UpButtonI } from "./ToUpButtonST";

export default function ToUpButtonID() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <UpButtonContainer show={show} onClick={scrollToTop}>
      <UpButtonBox>
        <UpButtonI className="fa-solid fa-angles-up" />
      </UpButtonBox>
    </UpButtonContainer>
  );
}
