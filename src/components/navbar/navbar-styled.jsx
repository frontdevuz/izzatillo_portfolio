import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* ✅ Navbar box */
export const NavbarBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #6c63ff, #4f46e5);
  padding: 30px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;

/* ✅ Navbar container */
export const NavbarContainer = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ✅ Logo */
export const NavbarLogoBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const NavbarLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

/* ✅ Desktop Menu */
export const NavbarContentBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarListBox = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavbarList = styled.li`
  position: relative;
`;

/* ✅ Desktop NavLink */
export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ffd6ff;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #ffeb3b;
  }
`;

/* ✅ Hamburger  */
export const Hamburger = styled.div`
  width: 32px;
  height: 24px;
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.4s ease;
  }

  span:nth-child(1) {
    top: ${({ $open }) => ($open ? "10px" : "0")};
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "none")};
  }

  span:nth-child(2) {
    top: 10px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? "translateX(-20px)" : "none")};
  }

  span:nth-child(3) {
    top: ${({ $open }) => ($open ? "10px" : "20px")};
    transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "none")};
  }
`;

/* ✅ Overlay 
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.3s ease;
  z-index: 998;
`;

/* ✅ Mobile Menu (premium fullscreen) */
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: linear-gradient(180deg, #6c63ff, #4f46e5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
`;

/* ✅ Mobile link */
export const MobileLink = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: #ffeb3b;
    transform: scale(1.05);
  }

  &.active {
    color: #ffd700;
  }
`;
