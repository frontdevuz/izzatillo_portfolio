import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FooterData } from "../../data/footer-data";
import {
  FooterBox,
  FooterContainer,
  FooterUpBox,
  FooterFirst,
  FooterUpFirstBox,
  FooterUpFBoxTop,
  FooterUpFBTopLogoBox,
  FooterUpFBTopLogo,
  FooterUpFBTopContentBox,
  FooterUpFBTopTitle,
  FooterUpFBTopP,
  FooterSecond,
  FooterUpSecondBox,
  FooterUpSecondBLinksTitle,
  FooterUpSecondBLinksBox,
  FooterUpSecondBLinksList,
  FooterThird,
  FooterUpThirdBox,
  FooterUpThirdBContactTitle,
  FooterUpThirdContactContentBox,
  FooterDownContainer,
  FooterDownContainerTitle,
  FooterDownFBox,
  SocialIcon,
} from "./FooterSL";
import Container from "../container/containerSB";

export default function FooterLS() {
  const { info, quickLinks, contact, socials } = FooterData;

  return (
    <FooterBox>
      <Container>
        <FooterContainer>

          {/* ✅ Footer UP */}
          <FooterUpBox>

            {/* ✅ 1. First Box – Logo */}
            <FooterFirst>
              <FooterUpFirstBox>
                <FooterUpFBoxTop>
                  <FooterUpFBTopLogoBox>
                    <Link to="/">
                      <FooterUpFBTopLogo src={info.logo} alt={info.name} />
                    </Link>
                  </FooterUpFBTopLogoBox>
                  <FooterUpFBTopContentBox>
                    <FooterUpFBTopTitle>{info.name}</FooterUpFBTopTitle>
                    <FooterUpFBTopP>{info.description}</FooterUpFBTopP>
                  </FooterUpFBTopContentBox>
                </FooterUpFBoxTop>

                {/* ✅ 4. Social Icons */}
                <FooterDownFBox>
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
                </FooterDownFBox>
              </FooterUpFirstBox>
            </FooterFirst>

            {/* ✅ 2. Quick Links */}
            <FooterSecond>
              <FooterUpSecondBox>
                <FooterUpSecondBLinksTitle>Quick Links</FooterUpSecondBLinksTitle>
                <FooterUpSecondBLinksBox>
                  {quickLinks.map((link) => (
                    <FooterUpSecondBLinksList key={link.id}>
                      <NavLink
                        to={link.path}
                        style={({ isActive }) => ({
                          color: isActive ? "gold" : "#ccc",
                          textDecoration: "none",
                        })}
                      >
                        {link.text}
                      </NavLink>
                    </FooterUpSecondBLinksList>
                  ))}
                </FooterUpSecondBLinksBox>
              </FooterUpSecondBox>
            </FooterSecond>

            {/* ✅ 3. Contact */}
            <FooterThird>
              <FooterUpThirdBox>
                <FooterUpThirdBContactTitle>Contact</FooterUpThirdBContactTitle>
                <FooterUpThirdContactContentBox>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{
                      display: "block",
                      fontSize: "17px",
                      color: "white",
                      fontWeight: "300",
                      cursor: "pointer",
                    }}
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    style={{
                      display: "block",
                      fontSize: "17px",
                      color: "white",
                      fontWeight: "300",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {contact.phone}
                  </a>
                  <a
                    href={contact.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      fontSize: "17px",
                      color: "white",
                      fontWeight: "300",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {contact.address}
                  </a>
                </FooterUpThirdContactContentBox>
              </FooterUpThirdBox>
            </FooterThird>

          </FooterUpBox>

          {/* ✅ Footer DOWN */}
          <FooterDownContainer>
            <FooterDownContainerTitle>{info.copyright}</FooterDownContainerTitle>
          </FooterDownContainer>

        </FooterContainer>
      </Container>
    </FooterBox>
  );
}
