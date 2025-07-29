export const NavbarBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(108, 99, 255, 0.6); /* slightly transparent */
  backdrop-filter: blur(8px); /* glass effect */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
  z-index: 999;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ffeb3b; /* gold hover */
    text-shadow: 0 0 4px #ffeb3b;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2.5px;
    background: #ffeb3b;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #00ffd5; /* aqua glow */
    text-shadow: 0 0 5px #00ffd5;
  }
`;
