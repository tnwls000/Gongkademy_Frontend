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

export const DropDownButton = styled.ul`
  padding: 12px 16px;
  font: ${typo.bodyRg700};
  color: ${color.gray600};
  background-color: ${color.gray100};
  border-radius: 8px;
  width: 112px;
  height: 48px;
`;

export const DropDownLi = styled.li`
  list-style-type: none;
  width: 112px;
  height: 48px;
  font: ${typo.bodyRg700};
  color: ${color.gray600};
  background-color: ${color.gray100};
  padding: 12px 16px;
`;

export const DropDownFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
