import { StyledButton } from "@components/common/button/Button.style";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
