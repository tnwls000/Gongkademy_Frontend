import { color, typo } from "@styles/style";
import styled, { css } from "styled-components";

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
  border-radius: 8px;

  &:hover {
    background-color: ${color.gray200};
  }
`;

export const DropDownFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: 16px;
`;
