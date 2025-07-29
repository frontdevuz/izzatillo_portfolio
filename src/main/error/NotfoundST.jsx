import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// 🔹 Main wrapper that takes the full viewport
export const NotBox = styled.div`
  background: #6c63ff;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevents unwanted scroll */
`;

// 🔹 Container that centers all inner elements
export const NOtBoxContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 🔹 Content wrapper
export const NotBoXConBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

// 🔹 Glitch effect animations for the 404 text
const glitch1 = keyframes`
  0% { clip-path: inset(0 0 90% 0); transform: translate(-2px, -2px); }
  20% { clip-path: inset(10% 0 70% 0); transform: translate(2px, 2px); }
  40% { clip-path: inset(20% 0 40% 0); transform: translate(-1px, 1px); }
  60% { clip-path: inset(40% 0 20% 0); transform: translate(1px, -1px); }
  80% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 2px); }
  100% { clip-path: inset(0 0 90% 0); transform: translate(0); }
`;

const glitch2 = keyframes`
  0% { clip-path: inset(80% 0 0 0); transform: translate(2px, 0); }
  20% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
  40% { clip-path: inset(40% 0 40% 0); transform: translate(1px, 1px); }
  60% { clip-path: inset(20% 0 60% 0); transform: translate(-1px, -1px); }
  80% { clip-path: inset(10% 0 80% 0); transform: translate(2px, 2px); }
  100% { clip-path: inset(80% 0 0 0); transform: translate(0); }
`;

// 🔹 Main 404 text with glitch pseudo-elements
export const NotBoxNumber = styled.h1`
  font-size: 160px;
  font-weight: 700;
  color: white;
  position: relative;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);

  &::before,
  &::after {
    content: "404";
    position: absolute;
    left: 0;
    width: 100%;
    background: transparent;
    overflow: hidden;
  }

  /* Blue glitch */
  &::before {
    animation: ${glitch1} 2s infinite linear alternate-reverse;
    color: #00fff9;
    text-shadow: 3px 0 red;
    }
    
    /* Red glitch */
    &::after {
      animation: ${glitch2} 2s infinite linear alternate-reverse;
      color: #ff00c1;
      text-shadow: -2px 0 lime;
  }
`;

// 🔹 Shaking animation for the number container
const shakeBox = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, 2px); }
  75% { transform: translate(2px, 2px); }
  100% { transform: translate(0, 0); }
`;

// 🔹 Container around the 404 number
export const NotBoxNumBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${shakeBox} 3s infinite ease-in-out;
  margin-bottom: 2rem;
`;

// 🔹 Optional content wrapper
export const NotContentBox = styled.div``;

// 🔹 Error description text
export const NotBoxText = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 1rem;
`;

// 🔹 Back to Home link
export const NotBoxLink = styled(Link)`
  font-size: 18px;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: gold;
  }
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: gold;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2.5px;
    background: gold;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  
`;
