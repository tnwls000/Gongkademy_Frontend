// components/DropDown.js
import React from "react";
import { DropDownButton, DropDownLi, DropDownFlex } from "./DropDown.style";
import { Flex } from "@components/common/flex/Flex";
import { DropUpIcon, DropDownIcon } from "@assets/svg/icons";

const DropDown = ({ dropDown, setDropDown, dropDownQnA, setDropDownQnA }) => (
  <DropDownButton
    onClick={() => {
      setDropDown(!dropDown);
    }}
  >
    <Flex justify="space-evenly" align="center">
      {dropDownQnA ? "Q&A" : "고민"}
      {dropDown ? (
        <DropUpIcon width="16" height="16" />
      ) : (
        <DropDownIcon width="16" height="16" />
      )}
    </Flex>
    {dropDown && (
      <DropDownFlex>
        <DropDownLi onClick={() => setDropDownQnA(true)}>Q&A</DropDownLi>
        <DropDownLi onClick={() => setDropDownQnA(false)}>고민</DropDownLi>
      </DropDownFlex>
    )}
  </DropDownButton>
);

export default DropDown;
