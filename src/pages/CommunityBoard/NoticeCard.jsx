import {
  NoticeContainer,
  NoticeTitle,
  ContentContainer,
  Content,
} from "./NoticeCard.style.js";
import {
  Visible,
  Like,
  LikeActive,
} from "@assets/svg/icons";
import { useState } from "react";
const Notice = ({ notice }) => {
  const [likeActive, setLikeActive] =
    useState(false);
  const handleClickLike = () => {
    setLikeActive(!likeActive);
  };
  return (
    <NoticeContainer>
      <NoticeTitle>{notice.title}</NoticeTitle>
      <ContentContainer>
        <Content>{notice.date}</Content>
        <Content>
          {likeActive ? (
            <LikeActive
              width="16"
              height="16"
              onClick={handleClickLike}
            />
          ) : (
            <Like
              width="16"
              height="12"
              onClick={handleClickLike}
            />
          )}

          {notice.like}
        </Content>
        <Content>
          <Visible width="16" height="16" />
          {notice.viewCnt}
        </Content>
      </ContentContainer>
    </NoticeContainer>
  );
};
export default Notice;
