import styled from "styled-components";

export const StyledText = styled.p`
  ${(props) => props.typo === "titleRg700" && props.theme.typo.titleRg700}
  ${(props) => props.typo === "titleSm700" && props.theme.typo.titleSm700}
  ${(props) => props.typo === "subtitleRg500" && props.theme.typo.subtitleRg500}
  ${(props) => props.typo === "bodyLg400" && props.theme.typo.bodyLg400}
  ${(props) => props.typo === "bodyLg700" && props.theme.typo.bodyLg700}
  ${(props) => props.typo === "bodyRg400" && props.theme.typo.bodyRg400}
  ${(props) => props.typo === "bodyRg700" && props.theme.typo.bodyRg700}
  ${(props) => props.typo === "bodySm400" && props.theme.typo.bodySm400}
  ${(props) => props.typo === "bodySm700" && props.theme.typo.bodySm700}
  ${(props) => props.typo === "captionRg400" && props.theme.typo.captionRg400}

  ${(props) => props.color === "pinkRed" && props.theme.color.pinkRed}
  ${(props) => props.color === "blue" && props.theme.color.blue}
  ${(props) => props.color === "green" && props.theme.color.green}
  ${(props) => props.color === "black" && props.theme.color.black}
  ${(props) => props.color === "white" && props.theme.color.white}
  ${(props) => props.color === "gray900" && props.theme.color.gray900}
  ${(props) => props.color === "gray800" && props.theme.color.gray800}
  ${(props) => props.color === "gray700" && props.theme.color.gray700}
  ${(props) => props.color === "gray600" && props.theme.color.gray600}
  ${(props) => props.color === "gray500" && props.theme.color.gray500}
  ${(props) => props.color === "gray400" && props.theme.color.gray400}
  ${(props) => props.color === "gray300" && props.theme.color.gray300}
  ${(props) => props.color === "gray200" && props.theme.color.gray200}
  ${(props) => props.color === "gray100" && props.theme.color.gray100}
`;
