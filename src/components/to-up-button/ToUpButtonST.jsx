import styled from "styled-components";

export const UpButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  opacity: ${({ show }) => (show ? "1" : "0")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

export const UpButtonBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #7861c9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: gold;
    transform: translateY(-5px);
  }
`;

export const UpButtonI = styled.i`
  color: white;
  font-size: 22px;
`;
