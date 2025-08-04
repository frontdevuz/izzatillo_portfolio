import styled from "styled-components";

export const HomeSection = styled.section`
  margin: 12rem 0 6rem 0;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HomeSecLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HomeSecLTopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 2rem 0;
`;

export const HomeIntro = styled.h2`
  font-size: 30px;
  font-weight: 400;
  font-family: Raleway;
`;

export const HomeTitle = styled.h1`
  font-family: Raleway;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00ffe7, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
`;

export const HomeJobTitle = styled.p`
  color: gold;
  font-family: Raleway;
  font-size: 16px;
  letter-spacing: 1px;
    &::after {
    content: "|";
    position: absolute;
    animation: blink 0.7s infinite;
    margin-left: 3px;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
`;

export const HomeIntroDes = styled.p`
  font-family: Raleway;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
`;

export const HomeButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  font-size: 18px;
  font-family: Raleway;
  color: white;
  border: 2px solid #00ffe7;
  border-radius: 50px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    background: #00ffe7;
    box-shadow: 0 0 15px #00ffe7;
  }

  &::before {
    content: "✨";
    position: absolute;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    animation: starfly 1s linear infinite;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes starfly {
    0% {
      left: -40px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      left: 120%;
      opacity: 0;
    }
  }
`;

export const HOmeSecLDownBox = styled.div``;

export const HomeSecRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 30px;
  }
`;

export const HomeSecPhotoBox = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const HomeSecPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 80px;
  transition: all 0.5s ease;
  box-shadow: 0 0 35px #302b63;
  cursor: grab;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 0 20px white;
  }
`;
