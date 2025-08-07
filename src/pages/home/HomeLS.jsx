import React from "react";
import LinkButton from "../../components/link/LinkButton";
import useTyping from "../../hooks/useTyping";
import {
  HomeContainer,
  HomeIntro,
  HomeIntroDes,
  HomeJobTitle,
  HOmeSecLDownBox,
  HomeSecLeft,
  HomeSecLTopBox,
  HomeSecPhoto,
  HomeSecPhotoBox,
  HomeSecRight,
  HomeSection,
  HomeTitle,
} from "./HomeLSTYLE";
import Container from "../../components/container/containerSB";
import { HomeData } from "../../data/home-data";

export default function HomeID() {
  const typingText = useTyping(
    ["Frontend Developer ✍️", "Cyber Security Student 🔏", "Tech Explorer 🧐"],
    150,
    1000
  );
  return (
    <React.Fragment>
      <HomeSection>
        <Container>
          <HomeContainer>
            {HomeData.slice(0, 1).map((home) => {
              return (
                <HomeSecLeft key={home.id}>
                  <HomeSecLTopBox>
                    <HomeIntro>{home.introduce}</HomeIntro>
                    <HomeTitle>{home.name}</HomeTitle>

                    <HomeJobTitle>{typingText}</HomeJobTitle>

                    <HomeIntroDes>{home.description}</HomeIntroDes>
                  </HomeSecLTopBox>

                  <HOmeSecLDownBox>
                    <LinkButton to={"/about"}>See more details</LinkButton>
                  </HOmeSecLDownBox>
                </HomeSecLeft>
              );
            })}

            {HomeData.slice(1).map((home) => {
              return (
                <HomeSecRight key={home.id}>
                  <HomeSecPhotoBox>
                    <HomeSecPhoto
                      src={home.photo} // ✅ `source` va `type`
                      loading="lazy"
                      alt="This is home page image !!!"
                    />
                  </HomeSecPhotoBox>
                </HomeSecRight>
              );
            })}
          </HomeContainer>
        </Container>
      </HomeSection>
    </React.Fragment>
  );
}
