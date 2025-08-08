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
  IconsBox,
} from "./HomeLSTYLE";
import { SocialIcon } from "../../components/footerML/FooterSL";
import { FooterData } from "../../data/footer-data";
import Container from "../../components/container/containerSB";
import { HomeData } from "../../data/home-data";
import { FooterDownFBox } from "../../components/footerML/FooterSL";
export default function HomeID() {
  const { socials } = FooterData;
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
                <HomeSecLeft
                  key={home.id}
                  data-aos="fade-in-up"
                  data-aos-delay="0"
                  data-aos-duration="700"
                >
                  <HomeSecLTopBox>
                    <HomeIntro
                      data-aos="flip-down"
                      data-aos-delay="100"
                      data-aos-duration="600"
                    >
                      {home.introduce}
                    </HomeIntro>

                    <HomeTitle
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      data-aos-duration="700"
                    >
                      {home.name}
                    </HomeTitle>

                    <HomeJobTitle
                      style={{ minHeight: "48px", transition: "all 0.3s ease" }}
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="600"
                    >
                      {typingText}
                    </HomeJobTitle>

                    <HomeIntroDes
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="700"
                    >
                      {home.description}
                    </HomeIntroDes>
                  </HomeSecLTopBox>

                  <HOmeSecLDownBox
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                    data-aos-duration="500"
                  >
                    <FooterDownFBox>
                      <IconsBox>
                        {socials.map((s) => (
                          <SocialIcon
                            key={s.id}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={s.icon}></i>
                          </SocialIcon>
                        ))}
                      </IconsBox>
                    </FooterDownFBox>
                    <LinkButton to={"/about"}>See more details</LinkButton>
                  </HOmeSecLDownBox>
                </HomeSecLeft>
              );
            })}

            {HomeData.slice(1).map((home) => {
              return (
                <HomeSecRight
                  key={home.id}
                  data-aos="fade-in-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <HomeSecPhotoBox
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="700"
                  >
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
