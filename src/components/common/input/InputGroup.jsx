import {
  InputGroupContainer,
  StyledInput,
} from "@components/common/input/InputGroup.style";
import { ValidMessage } from "@components/common/input/ValidMessage";

export const InputGroup = ({ auth, state, field, onChange }) => {
  return (
    <InputGroupContainer valid={state}>
      <StyledInput
        state={state}
        id={field}
        onChange={onChange}
        placeholder={field.placeholder}
      />
      {auth === "signup" && <ValidMessage field={field} state={state} />}
    </InputGroupContainer>
  );
};
