import styled, { css } from "styled-components";

//TODO: event에 따라 icon 색상 변경
export const Flex = styled.div`
  display: flex;
  gap: 8px;
`;

export const InputGroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled.input`
  position: relative;
  ${({ theme }) => theme.typo.bodySm400};

  min-height: 48px;
  flex: 1;
  border-radius: 8px;
  padding: 12px 16px;

  color: ${({ theme }) => theme.color.gray600};
  background-color: ${({ theme }) => theme.color.gray100};
  outline: none;
  border: none;

  ${({ state, theme }) => {
    if (state === "default") {
      return css`
        &:hover {
          outline: solid 1px ${theme.color.gray700};
        }

        &:focus {
          color: ${theme.color.black};
          outline: solid 1px ${theme.color.black};
        }

        &:disabled {
          color: ${theme.color.gray300};
        }
      `;
    }
    if (state === "success") {
      return css`
        color: ${theme.color.black};
      `;
    }
    if (state === "error") {
      return css`
        color: ${theme.color.black};
        outline: solid 1px ${theme.color.pinkRed};
      `;
    }
  }};
`;

export const StyledMessage = styled.p`
  height: 20px;
  ${({ theme }) => theme.typo.captionRg400};

  ${({ state, theme }) => {
    if (state === "success") {
      return css`
        color: ${theme.color.green};
      `;
    }
    if (state === "error") {
      return css`
        color: ${theme.color.pinkRed};
      `;
    }
  }};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 100%;
  width: 24px;
  height: 24px;
  padding: 4px;
  transform: translate(calc(-100% - 16px), 12px);
`;
