import styled from "styled-components";

export const HomeSection = styled.section`
  margin: 12rem 0 6rem 0;
  min-height: 80vh;
  display: flex;
`;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const HomeSecLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export const HomeSecLTopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeIntro = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;
export const HomeTitle = styled.h1`
  font-size: 60px;
  font-weight:300;
`;
export const HomeJobTitle = styled.p``;
export const HomeIntroDes = styled.p``;

export const HOmeSecLDownBox = styled.div`
  border: 2px solid blue;
`;

export const HomeSecRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeSecPhotoBox = styled.div`
  width: 100%;
  height: auto;
`;

export const HomeSecPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50px;
`;
