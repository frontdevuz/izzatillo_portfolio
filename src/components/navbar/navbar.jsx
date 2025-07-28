import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../../data/navbar-data";
import {
  NavbarBox,
  NavbarContainer,
  NavbarLogoBox,
  NavbarLogo,
  NavbarContentBox,
  NavbarListBox,
  NavbarList,
  StyledNavLink,
  Hamburger,
  MobileMenuOverlay,
  MobileMenu,
  MobileLink,
} from "./navbar-styled";
import Container from "../container/containerSB";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoItem = navbarData[0];
  const menuItems = navbarData.slice(1);

  return (
    <NavbarBox>
      <Container>
        <NavbarContainer>
          {/* ✅ Logo */}
          <NavbarLogoBox>
            <Link to={logoItem.url}>
              <NavbarLogo src={logoItem.icon} alt="logo" />
            </Link>
          </NavbarLogoBox>

          {/* ✅ Hamburger Icon */}
          <Hamburger $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>

          {/* ✅ Desktop Menu */}
          <NavbarContentBox>
            <NavbarListBox>
              {menuItems.map((nav) => (
                <NavbarList key={nav.url}>
                  <StyledNavLink to={nav.url}>{nav.name}</StyledNavLink>
                </NavbarList>
              ))}
            </NavbarListBox>
          </NavbarContentBox>
        </NavbarContainer>

        {/* ✅ Overlay & Mobile Menu */}
        <MobileMenuOverlay $open={menuOpen} onClick={() => setMenuOpen(false)} />
        <MobileMenu $open={menuOpen}>
          {menuItems.map((nav) => (
            <MobileLink key={nav.url} to={nav.url} onClick={() => setMenuOpen(false)}>
              {nav.name}
            </MobileLink>
          ))}
        </MobileMenu>
      </Container>
    </NavbarBox>
  );
}
