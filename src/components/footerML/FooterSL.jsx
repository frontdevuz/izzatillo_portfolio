import styled from "styled-components";

/* ✅ Main Footer Wrapper */
export const FooterBox = styled.footer`
  width: 100%;
  margin-top: auto;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

/* ✅ Container to center and wrap content */
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

/* ✅ Top section wrapper (Logo / Links / Contact) */
export const FooterUpBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid grey;
  padding-bottom: 20px;

  /* Tablet */
  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    text-align: center;
  }

  /* Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

/* ✅ First column container */
export const FooterFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

/* ✅ Second column container */
export const FooterSecond = styled.div`
padding-top:25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 5px;
    border-top:1px solid grey;
  }
`;

/* ✅ Third column container */
export const FooterThird = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 5px;
    margin-top:20px;
  }
`;

/* ✅ First box (Logo + Name + Subtitle) */
export const FooterUpFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

/* ✅ Logo & Name container */
export const FooterUpFBoxTop = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

/* ✅ Logo Box */
export const FooterUpFBTopLogoBox = styled.div`
  width: 60px;
  min-height: 60px;
  flex-shrink: 0;
`;

/* ✅ Logo Image */
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

/* ✅ Name + Subtitle container */
export const FooterUpFBTopContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* ✅ Name (Title) */
export const FooterUpFBTopTitle = styled.h2`
  font-size: 40px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 30px;
  }

  &:hover {
    color: #facc15;
  }
`;

/* ✅ Subtitle */
export const FooterUpFBTopP = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: 300;
`;

/* ✅ Social Icons Container */
export const FooterDownFBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 480px) {
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

/* ✅ Social Icons */
export const SocialIcon = styled.a`
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #facc15;
  }
`;

/* ✅ Quick Links Box */
export const FooterUpSecondBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
`;

/* ✅ Quick Links Title */
export const FooterUpSecondBLinksTitle = styled.h2`
  font-size: 22px;
  color: #7861c9;
  font-weight: 400;
  cursor: grab;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/* ✅ Quick Links List */
export const FooterUpSecondBLinksBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
  gap: 25px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/* ✅ Quick Links Item */
export const FooterUpSecondBLinksList = styled.li`
  position: relative;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: white;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2.5px;
    background: white;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

/* ✅ Contact Box */
export const FooterUpThirdBox = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

/* ✅ Contact Title */
export const FooterUpThirdBContactTitle = styled.h2`
  font-size: 22px;
  color: #7861c9;
  font-weight: 400;
  cursor: grab;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/* ✅ Contact Items */
export const FooterUpThirdContactContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  font-size: 18px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

/* ✅ Footer Bottom Container */
export const FooterDownContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

/* ✅ Footer Bottom Text */
export const FooterDownContainerTitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
