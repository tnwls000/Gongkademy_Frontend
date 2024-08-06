import { color, typo } from "@styles/style";
import styled, { css } from "styled-components";

export const SelectedPostBtn = styled.p`
  font: ${typo.bodyRg400};
  color: ${color.gray800};
  border: solid 1px ${color.gray800};
  border-radius: 4px;
  padding: 4px 8px;

  ${({ selected }) =>
    selected &&
    css`
      color: ${color.white};
      background-color: ${color.gray800};
    `}
`;

export const DropDownButton = styled.ul`
  padding: 16px 12px;
  font: ${typo.bodyRg700};
  color: ${color.gray600};
  background-color: ${color.gray100};
  border-radius: 8px;
`;
