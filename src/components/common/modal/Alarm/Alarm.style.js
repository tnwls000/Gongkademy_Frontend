import styled from "styled-components";
import { Flex } from "@components/common/flex/Flex";
export const Container = styled(Flex)`
  border-radius: 3rem; /* 원하는 테두리 반경 */
`;
export const Title = styled.p`
  ${({ theme }) => theme.typo.titleSm700}
`;
export const Content = styled.p`
  ${({ theme }) => theme.typo.bodyRg400}
  color: ${(props) => props.color || "black"}
`;
