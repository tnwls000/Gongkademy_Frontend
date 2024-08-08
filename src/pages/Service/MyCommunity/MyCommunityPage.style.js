import { color, typo } from "@styles/style";
import styled, { css } from "styled-components";

export const TopBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 64px;
  align-items: center;
`;

export const SelectedPostBtn = styled.p`
  font: ${typo.bodyRg400};
  color: ${color.gray800};
  border: solid 1px ${color.gray800};
  border-radius: 4px;
  padding: 4px 8px;
  height: 32px;

  ${({ selected }) =>
    selected &&
    css`
      color: ${color.white};
      background-color: ${color.gray800};
    `}
`;

export const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
