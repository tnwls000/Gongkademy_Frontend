import styled from "styled-components";

export const ConcernContianer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 616px);
  grid-template-rows: repeat(3, 124px);
  gap: 16px 12px;
`;

export const ConcernBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  justify-content: space-between;

  width: 616px;
  height: 124px;
  gap: 12px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h2`
  ${({ theme }) => theme.typo.bodyLg700};
`;
export const ContentPreview = styled.p`
  ${({ theme }) => theme.typo.bodyRg400};
  color: ${({ theme }) => theme.color.gray700};
`;

export const Date = styled.p`
  ${({ theme }) => theme.typo.bodySm400};
  color: ${({ theme }) => theme.color.gray500};
`;
