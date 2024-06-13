import { FlexBlock } from "./Flex.style";

export const Flex = ({ children, ...props }) => {
  return <FlexBlock {...props}>{children}</FlexBlock>;
};
