import { StyledText } from "./Text.style";

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
