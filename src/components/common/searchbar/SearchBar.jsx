import {
  SearchBarContainer,
  StyledSearchBar,
  StyledSelect,
  Selected,
  SelectedValue,
  Arrow,
  Options,
  Option,
} from "./Searchbar.style";
import { useState } from "react";
const SearchBar = () => {
  const [selected, setSelected] =
    useState("최신순");
  const [showOptions, setShowOptions] =
    useState(false);
  const handleClickOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleOptionClick = (option) => {
    setSelected(option);
    setShowOptions(false);
  };
  return (
    <SearchBarContainer>
      <StyledSearchBar placeholder="제목, 내용을 입력해주세요"></StyledSearchBar>
      <StyledSelect>
        <Selected onClick={handleClickOptions}>
          <SelectedValue>
            {selected}
          </SelectedValue>
          <Arrow>
            {showOptions ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </Arrow>
        </Selected>
        <Options active={showOptions}>
          <Option
            onClick={() =>
              handleOptionClick("최신순")
            }
          >
            최신순
          </Option>
          <Option
            onClick={() =>
              handleOptionClick("조회수순")
            }
          >
            조회수순
          </Option>
          <Option
            onClick={() =>
              handleOptionClick("댓글순")
            }
          >
            댓글순
          </Option>
          <Option
            onClick={() =>
              handleOptionClick("좋아요순")
            }
          >
            좋아요순
          </Option>
        </Options>
      </StyledSelect>
    </SearchBarContainer>
  );
};
export default SearchBar;
