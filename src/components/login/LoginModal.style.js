import styled from "styled-components";

export const LoginFormBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;
