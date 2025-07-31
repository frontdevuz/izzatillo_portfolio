import styled from "styled-components";

export const FooterBox = styled.footer`
  width: 100%;
  margin-top: auto;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  padding: 20px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// ✅ Footer UP
export const FooterUpBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

// ✅ First box (Logo + Text)
export const FooterUpFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterUpFBoxTop = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  flex-wrap: wrap;
`;

export const FooterUpFBTopLogoBox = styled.div`
  width: 60px;
  min-height: 60px;
  flex-shrink: 0;
`;

export const FooterUpFBTopLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 0 5px #facc15) saturate(200%) brightness(120%);
  }
`;

export const FooterUpFBTopContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
`;

export const FooterUpFBTopTitle = styled.h2`
  font-size: 40px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
`;

export const FooterUpFBTopP = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: 300;
`;

export const FooterDownFBox = styled.div``;

// ✅ Second box
export const FooterUpSecondBox = styled.div``;
export const FooterUpSecondBLinksTitle = styled.h2``;
export const FooterUpSecondBLinksBox = styled.ul``;
export const FooterUpSecondBLinksList = styled.li``;

// ✅ Third box
export const FooterUpThirdBox = styled.div``;
export const FooterUpThirdBContactTitle = styled.h2``;
export const FooterUpThirdContactContentBox = styled.div``;

// ✅ Footer down
export const FooterDownContainer = styled.div``;
export const FooterDownContainerTitle = styled.p``;
