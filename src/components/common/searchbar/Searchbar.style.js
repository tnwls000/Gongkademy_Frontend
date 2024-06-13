import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 608px;
  gap: 8px;
`;
export const StyledSearchBar = styled.input`
  flex-shrink: 1;
  flex-grow: 1;
  width: 504px;
  min-width: 200px;
  height: 48px;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  padding: 12px 16px;
  border-radius: 8px;
`;
export const StyledSelect = styled.div`
  width: 96px;
  height: 48px;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  //   padding: 12px 0px;
  border-radius: 8px;
`;
export const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
`;
export const SelectedValue = styled.div`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  //   text-overflow: ellipsis;
`;
export const Arrow = styled.div`
  //   font-size: 16px;
`;
export const Options = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  width: 96px;
  //   height: 48px;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  //   padding: 0px 16px;
  border-radius: 8px;
  position: absolute;
  cursor: pointer;
  display: ${(props) =>
    props.active ? "initial" : "none"};
`;
export const Option = styled.li`
  line-height: 48px;
  width: 96px;
  padding: 0px 16px;
  &:hover {
    background-color: ${({ theme }) =>
      theme.color.gray200};
  }
  border-radius: 8px;
`;
