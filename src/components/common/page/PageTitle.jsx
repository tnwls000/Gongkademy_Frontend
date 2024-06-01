import styled from "styled-components";

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  h2 {
    ${({ theme }) => theme.typo.titleRg700};
  }
`;

export const PageTitle = ({ children }) => {
  return <TitleBlock>{children}</TitleBlock>;
};


