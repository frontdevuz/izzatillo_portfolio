import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonLK = styled(NavLink)`
  display: inline-block;
  width:200px;
  text-align:center;
  padding:0.7rem 0;
  font-size: 17px;
  font-family: Raleway;
  color: white;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  border-radius: 50px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: black;
    box-shadow: 0 0 4px white;
    color: white;
    box-shadow:0px 0px 10px white;
    }

    &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.5s ease, height 0.5s ease;
    z-index: 0;
    border: 2px solid #7861c9;
  }

  &:hover::after {
    width: 200%;
    height: 200%;
  }
`;
