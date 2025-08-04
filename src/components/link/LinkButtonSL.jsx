import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonLK = styled(NavLink)`
  position: relative;
  padding: 17px 30px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  overflow: hidden;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 0 0 15px rgba(93, 24, 220, 0.3);

  /* 🌠 Flying Star */
  &::before {
    content: "★";
    position: absolute;
    top: 50%;
    left: -30px;
    font-size: 18px;
    color: gold;
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }

  &:hover::before {
    animation: flyStar 0.5s ease-out forwards;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(93, 24, 220, 0.6);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 10px rgba(93, 24, 220, 0.3);
  }

  /* 🌟 Animation Keyframes */
  @keyframes flyStar {
    0% {
      left: -30px;
      opacity: 0;
      transform: translateY(-50%) scale(0.5) rotate(0deg);
    }
    30% {
      opacity: 1;
      transform: translateY(-60%) scale(1) rotate(30deg);
    }
    60% {
      opacity: 1;
      transform: translateY(-40%) scale(1) rotate(60deg);
    }
    100% {
      left: 100%;
      opacity: 0;
      transform: translateY(-50%) scale(0.8) rotate(90deg);
    }
  }
`;
