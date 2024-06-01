import { StyledMessage } from "@components/common/input/InputGroup.style";

export const ValidMessage = ({ state, field }) => {
  console.log("state  " + state);
  return (
    <StyledMessage state={state}>
      {state === "success"
        ? field.successMessage
        : state === "error"
        ? field.errorMessage
        : ""}
    </StyledMessage>
  );
};
