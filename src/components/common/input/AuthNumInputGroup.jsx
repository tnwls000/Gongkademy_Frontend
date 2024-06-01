import {
  InputGroupContainer,
  StyledInput,
  Flex,
} from "@components/common/input/InputGroup.style";
import { Button } from "@components/common/button/Button";
import { ValidMessage } from "@components/common/input/ValidMessage";
export const AuthNumInputGroup = ({
  auth,
  state,
  field,
  onChange,
  onOutLinedBtnClick,
  onFillBtnClick,
}) => {
  return (
    <InputGroupContainer state={state}>
      <Flex>
        <StyledInput
          state={state}
          id={field}
          onChange={onChange}
          placeholder={field.placeholder}
        />
        <Button type="normal" shape="outlinedRg" onClick={onOutLinedBtnClick}>
          {"인증번호 재전송"}
        </Button>
        <Button type="normal" shape="filledBold" onClick={onFillBtnClick}>
          {"확인"}
        </Button>
      </Flex>
      {auth === "signup" && <ValidMessage field={field} state={state} />}
    </InputGroupContainer>
  );
};
