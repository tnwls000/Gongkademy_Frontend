import { StyledButton } from "@components/common/button/Button.style";

export const Button = ({ type, shape, children, ...rest }) => {
  return (
    <StyledButton shape={shape} type={type} {...rest}>
      {children}
    </StyledButton>
  );
};
