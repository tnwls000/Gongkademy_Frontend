import styled from "styled-components";

export const StyledButton = ({ type, shape, children, ...rest }) => {
  const ButtonComponent = getButtonType(type);
  return (
    <ButtonComponent shape={shape} {...rest}>
      {children}
    </ButtonComponent>
  );
};

const getButtonType = (type) => {
  switch (type) {
    case "cta":
      return CtaButton;
    case "normal":
    default:
      return NormalButton;
  }
};

const fontSize = {
  textRg: (theme) => theme.typo.bodyRg400,
  textBold: (theme) => theme.typo.bodyRg700,
  filledRg: (theme) => theme.typo.bodyRg400,
  filledBold: (theme) => theme.typo.bodyRg700,
  outlinedRg: (theme) => theme.typo.bodyRg400,
  outlinedBold: (theme) => theme.typo.bodyRg700,
};

const defaultBorder = {
  textRg: (theme) => "none",
  textBold: (theme) => "none",
  filledRg: (theme) => "none",
  filledBold: (theme) => "none",
  outlinedRg: (theme) => `1px solid ${theme.color.black}`,
  outlinedBold: (theme) => `1px solid ${theme.color.black}`,
};

const defaultColors = {
  textRg: (theme) => theme.color.black,
  textBold: (theme) => theme.color.black,
  filledRg: (theme) => theme.color.white,
  filledBold: (theme) => theme.color.white,
  outlinedRg: (theme) => theme.color.black,
  outlinedBold: (theme) => theme.color.black,
};
const defaultBgColors = {
  textRg: (theme) => theme.color.white,
  textBold: (theme) => theme.color.white,
  filledRg: (theme) => theme.color.black,
  filledBold: (theme) => theme.color.black,
  outlinedRg: (theme) => theme.color.white,
  outlinedBold: (theme) => theme.color.white,
};
const hoverColors = {
  textRg: (theme) => theme.color.gray800,
  textBold: (theme) => theme.color.gray800,
  filledRg: (theme) => theme.color.white,
  filledBold: (theme) => theme.color.white,
  outlinedRg: (theme) => theme.color.gray800,
  outlinedBold: (theme) => theme.color.gray800,
};
const hoverBgColors = {
  textRg: (theme) => theme.color.white,
  textBold: (theme) => theme.color.white,
  filledRg: (theme) => theme.color.gray800,
  filledBold: (theme) => theme.color.gray800,
  outlinedRg: (theme) => theme.color.white,
  outlinedBold: (theme) => theme.color.white,
};
const hoverBorder = {
  textRg: (theme) => "none",
  textBold: (theme) => "none",
  filledRg: (theme) => "none",
  filledBold: (theme) => "none",
  outlinedRg: (theme) => `1px solid ${theme.color.gray800}`,
  outlinedBold: (theme) => `1px solid ${theme.color.gray800}`,
};

const activeColors = {
  textRg: (theme) => theme.color.gray700,
  textBold: (theme) => theme.color.gray700,
  filledRg: (theme) => theme.color.white,
  filledBold: (theme) => theme.color.white,
  outlinedRg: (theme) => theme.color.gray700,
  outlinedBold: (theme) => theme.color.gray700,
};
const activeBgColors = {
  textRg: (theme) => theme.color.white,
  textBold: (theme) => theme.color.white,
  filledRg: (theme) => theme.color.gray700,
  filledBold: (theme) => theme.color.gray700,
  outlinedRg: (theme) => theme.color.white,
  outlinedBold: (theme) => theme.color.white,
};
const activeBorder = {
  textRg: (theme) => "none",
  textBold: (theme) => "none",
  filledRg: (theme) => "none",
  filledBold: (theme) => "none",
  outlinedRg: (theme) => `1px solid ${theme.color.gray700}`,
  outlinedBold: (theme) => `1px solid ${theme.color.gray700}`,
};
const disabledBgColors = {
  textRg: (theme) => theme.color.white,
  textBold: (theme) => theme.color.white,
  filledRg: (theme) => theme.color.gray200,
  filledBold: (theme) => theme.color.gray200,
  outlinedRg: (theme) => theme.color.white,
  outlinedBold: (theme) => theme.color.white,
};
const disabledBorder = {
  textRg: (theme) => "none",
  textBold: (theme) => "none",
  filledRg: (theme) => "none",
  filledBold: (theme) => "none",
  outlinedRg: (theme) => `1px solid ${theme.color.gray200}`,
  outlinedBold: (theme) => `1px solid ${theme.color.gray200}`,
};

export const NormalButton = styled.button`
  height: 48px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  ${({ shape, theme }) => fontSize[shape](theme)};

  color: ${({ shape, theme }) => defaultColors[shape](theme)};
  background-color: ${({ shape, theme }) => defaultBgColors[shape](theme)};
  border: ${({ shape, theme }) => defaultBorder[shape](theme)};

  &:hover {
    color: ${({ shape, theme }) => hoverColors[shape](theme)};
    background-color: ${({ shape, theme }) => hoverBgColors[shape](theme)};
    border: ${({ shape, theme }) => hoverBorder[shape](theme)};
  }

  &:active {
    color: ${({ shape, theme }) => activeColors[shape](theme)};
    background-color: ${({ shape, theme }) => activeBgColors[shape](theme)};
    border: ${({ shape, theme }) => activeBorder[shape](theme)};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray400};
    background-color: ${({ shape, theme }) => disabledBgColors[shape](theme)};
    border: ${({ shape, theme }) => disabledBorder[shape](theme)};
  }
`;

export const CtaButton = styled.button`
  ${({ shape, theme }) => fontSize[shape](theme)};
  width: 100%;
  height: 58px;
  padding: 16px 0px;
  border-radius: 8px;
  cursor: pointer;

  color: ${({ shape, theme }) => defaultColors[shape](theme)};
  background-color: ${({ shape, theme }) => defaultBgColors[shape](theme)};
  border: ${({ shape, theme }) => defaultBorder[shape](theme)};

  &:hover {
    color: ${({ shape, theme }) => hoverColors[shape](theme)};
    background-color: ${({ shape, theme }) => hoverBgColors[shape](theme)};
    border: ${({ shape, theme }) => hoverBorder[shape](theme)};
  }

  &:active {
    color: ${({ shape, theme }) => activeColors[shape](theme)};
    background-color: ${({ shape, theme }) => activeBgColors[shape](theme)};
    border: ${({ shape, theme }) => activeBorder[shape](theme)};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray400};
    background-color: ${({ shape, theme }) => disabledBgColors[shape](theme)};
    border: ${({ shape, theme }) => disabledBorder[shape](theme)};
  }
`;
