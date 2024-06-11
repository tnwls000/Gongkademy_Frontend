import styled from "styled-components";

export const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3.5rem;
  padding: 0.75rem 1.5rem;
`;
export const Body = styled.p`
  p {
    ${({ theme }) => theme.typo.bodySm400};
  }
`;

export const LectureTitle = styled.p`
  ${({ theme }) => theme.typo.bodyLg700};
`;
