import { color, typo } from "@styles/style";
import styled, { css } from "styled-components";

export const DropDownButton = styled.ul`
  padding: 12px 16px;
  font: ${typo.bodyRg700};
  color: ${color.gray200};
  background-color: ${color.gray800};
  border-radius: 8px;
  width: 112px;
  height: 48px;
`;

export const DropDownLi = styled.li`
  list-style-type: none;
  width: 112px;
  height: 48px;
  font: ${typo.bodyRg700};
  color: ${color.gray200};
  background-color: ${color.gray800};
  padding: 12px 16px;
  position: relative;
  z-index: 999;

  &:hover {
    background-color: ${color.gray500};
  }
`;

export const DropDownFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  margin-top: 16px;
`;
