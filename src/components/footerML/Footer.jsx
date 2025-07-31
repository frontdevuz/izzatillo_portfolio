import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FooterData } from "../../data/footer-data";
import {
  FooterBox,
  FooterContainer,
  FooterUpBox,
  FooterUpFirstBox,
  FooterUpFBoxTop,
  FooterUpFBTopLogoBox,
  FooterUpFBTopLogo,
  FooterUpFBTopContentBox,
  FooterUpFBTopTitle,
  FooterUpFBTopP,
  FooterUpSecondBox,
  FooterUpSecondBLinksTitle,
  FooterUpSecondBLinksBox,
  FooterUpSecondBLinksList,
  FooterUpThirdBox,
  FooterUpThirdBContactTitle,
  FooterUpThirdContactContentBox,
  FooterDownContainer,
  FooterDownContainerTitle,
  FooterDownFBox,
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
              <FooterDownFBox>
                {/* ✅ 4. Social Icons */}
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </FooterDownFBox>
            </FooterUpFirstBox>

            {/* ✅ 2. Quick Links */}
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

            {/* ✅ 3. Contact */}
            <FooterUpThirdBox>
              <FooterUpThirdBContactTitle>Contact</FooterUpThirdBContactTitle>
              <FooterUpThirdContactContentBox>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
              </FooterUpThirdContactContentBox>
            </FooterUpThirdBox>
          </FooterUpBox>

          {/* ✅ 5. Footer DOWN */}
          <FooterDownContainer>
            <FooterDownContainerTitle>
              {info.copyright}
            </FooterDownContainerTitle>
          </FooterDownContainer>
        </FooterContainer>
      </Container>
    </FooterBox>
  );
}
