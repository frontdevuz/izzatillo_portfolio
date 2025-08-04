import React from "react";
import LinkButton from "../../components/link/LinkButton";
import {
  HomeContainer,
  HomeIntro,
  HomeIntroDes,
  HomeJobTitle,
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
                    <HomeJobTitle>{home.job}</HomeJobTitle>
                    <HomeIntroDes>{home.description}</HomeIntroDes>
                  </HomeSecLTopBox>
                </HomeSecLeft>
              );
            })}
            {HomeData.slice(1).map((home) => {
              return (
                <HomeSecRight>
                  <HomeSecPhotoBox>
                    <HomeSecPhoto
                      src={home.photo}
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
