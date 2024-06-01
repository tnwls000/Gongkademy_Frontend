import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 300;
  background-color: ${({ theme }) => theme.color.black};
  opacity: 0.25;
`;

export const ModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 400px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 24px;
  border-radius: 16px;
`;

export const CancelIconBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  cursor: pointer;

  top: 0%;
  left: 100%;
  padding: 8px;
  transform: translate(calc(-100% - 8px), 8px);
`;
