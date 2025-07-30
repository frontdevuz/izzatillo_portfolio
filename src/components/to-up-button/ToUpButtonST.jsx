import styled from "styled-components";

export const UpButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
  opacity: ${({ show }) => (show ? "1" : "0")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

export const UpButtonBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #4f46e5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #3730a3;
    transform: translateY(-5px);
  }
`;

export const UpButtonI = styled.i`
  color: white;
  font-size: 22px;
`;
