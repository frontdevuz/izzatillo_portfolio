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
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out-cubic"
                  data-aos-offset="120"
                >
                  <HomeSecLTopBox>
                    <HomeIntro
                      data-aos="flip-down"
                      data-aos-delay="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out-back"
                    >
                      {home.introduce}
                    </HomeIntro>

                    <HomeTitle
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out-back"
                    >
                      {home.name}
                    </HomeTitle>

                    <HomeJobTitle
                      style={{
                        minHeight: "48px",
                        transition: "all 0.3s ease",
                      }}
                      data-aos="fade-left"
                      data-aos-delay="500"
                      data-aos-duration="1200"
                      data-aos-easing="ease-out-cubic"
                    >
                      {typingText}
                    </HomeJobTitle>

                    <HomeIntroDes
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1300"
                      data-aos-easing="ease-in-out"
                    >
                      {home.description}
                    </HomeIntroDes>
                  </HomeSecLTopBox>

                  <HOmeSecLDownBox
                    data-aos="zoom-in-up"
                    data-aos-delay="700"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out-back"
                  >
                    <FooterDownFBox>
                      <IconsBox>
                        {socials.map((s) => (
                          <SocialIcon
                            key={s.id}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                            data-aos-easing="ease-out-cubic"
                          >
                            <i className={s.icon}></i>
                          </SocialIcon>
                        ))}
                      </IconsBox>
                    </FooterDownFBox>
                    <LinkButton
                      to={"/about"}
                      data-aos="fade-up"
                      data-aos-delay="900"
                      data-aos-duration="1000"
                      data-aos-easing="ease-out-cubic"
                    >
                      See more details
                    </LinkButton>
                  </HOmeSecLDownBox>
                </HomeSecLeft>
              );
            })}

            {HomeData.slice(1).map((home) => {
              return (
                <HomeSecRight
                  key={home.id}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out-cubic"
                  data-aos-offset="120"
                >
                  <HomeSecPhotoBox
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    data-aos-easing="ease-out-back"
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
