import { useState } from "react";
import {
  SelectedPostBtn,
  DropDownButton,
  DropDownLi,
  DropDownFlex,
} from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";

const Dropdown = ({ handleDropChange }) => {
  const handleClick = () => {
    handleDropChange();
  };

  return (
    <>
      <DropDownFlex>
        <DropDownLi onClick={handleClick}>Q&A</DropDownLi>
        <DropDownLi onClick={handleClick}>고민</DropDownLi>
      </DropDownFlex>
    </>
  );
};

const MyCommunityPage = () => {
  const [dropDown, setDropDown] = useState(false);

  const [myPostBtn, setMyPostBtn] = useState(true);
  const [listPostBtn, setListPostBtn] = useState(false);
  const [scrapPostBtn, setScrapPostBtn] = useState(false);

  const [dropDownQnA, setDropDownQnA] = useState(true);

  const handleChangeDropDown = () => {
    setDropDownQnA(!dropDownQnA);
  };

  return (
    <>
      <Flex width="100%" justify="space-between">
        <Flex gap="16px">
          <SelectedPostBtn
            onClick={() => {
              setMyPostBtn(true);
              setListPostBtn(false);
              setScrapPostBtn(false);
            }}
            selected={myPostBtn}
          >
            내가 쓴 게시글
          </SelectedPostBtn>
          <SelectedPostBtn
            onClick={() => {
              setMyPostBtn(false);
              setListPostBtn(true);
              setScrapPostBtn(false);
            }}
            selected={listPostBtn}
          >
            좋아요 누른 게시글
          </SelectedPostBtn>
          <SelectedPostBtn
            onClick={() => {
              setMyPostBtn(false);
              setListPostBtn(false);
              setScrapPostBtn(true);
            }}
            selected={scrapPostBtn}
          >
            스크랩한 게시글
          </SelectedPostBtn>
        </Flex>

        {/* 드롭다운 */}
        <DropDownButton
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <Flex justify="space-evenly" align="center">
            {dropDownQnA ? "Q&A" : "고민"}

            {dropDown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
              </svg>
            )}
          </Flex>
          {dropDown && <Dropdown handleDropChange={handleChangeDropDown} />}
        </DropDownButton>
      </Flex>
    </>
  );
};

export default MyCommunityPage;
