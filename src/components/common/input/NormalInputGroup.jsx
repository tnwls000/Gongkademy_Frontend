import {
  InputGroupContainer,
  StyledInput,
  Flex,
} from "@components/common/input/InputGroup.style";
import Button from "@components/common/button/Button";
import { ValidMessage } from "@components/common/input/ValidMessage";

export const NormalInputGroup = ({ auth, state, field, onChange, onClick }) => {
  console.log("여기는: " + state);
  return (
    <InputGroupContainer state={state}>
      <Flex>
        <StyledInput
          state={state}
          id={field}
          onChange={onChange}
          placeholder={field.placeholder}
        />
        <Button type="normal" shape="filledBold" onClick={onClick}>
          {field.btnText}
        </Button>
      </Flex>{" "}
      {auth === "signup" && <ValidMessage field={field} state={state} />}
    </InputGroupContainer>
  );
};
