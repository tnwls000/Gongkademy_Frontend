import { useState } from "react";
import { SelectedPostBtn } from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";

const MyCommunityPage = () => {
  const [myPostBtn, setMyPostBtn] = useState(true);
  const [listPostBtn, setListPostBtn] = useState(false);
  const [scrapPostBtn, setScrapPostBtn] = useState(false);

  return (
    <>
      <Flex width="100%" justify="start">
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
      </Flex>
    </>
  );
};

export default MyCommunityPage;
