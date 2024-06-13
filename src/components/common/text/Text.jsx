import { StyledText } from "./Text.style";

export const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
