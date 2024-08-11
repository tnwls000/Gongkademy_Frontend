// components/PostList.js
import React from "react";
import MyPostCard from "@pages/Service/MyCommunity/MyPostCard";
import { PostGrid } from "./PostList.style";
import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(-2); // 연도의 마지막 두 자리
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 1을 더함)
  const day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}/${month}/${day}`;
};

const removePTags = (htmlString) => {
  return htmlString.replace(/<\/?p>/g, "");
};
const PostList = ({ posts, totalPage, totalCount }) => (
  <PostGrid>
    {posts.map((item) => (
      // <Link key={item.articleId} to={PATH.COMMUNITY_CONCERN(item.articleId)}>
      <MyPostCard
        key={item.articleId}
        title={item.title}
        scrapCount={item.scrapCount}
        content={removePTags(item.content)}
        nickName={item.nickname}
        createTime={formatDate(item.createTime)}
        courseTitle={item.courseTitle}
        commentCount={item.commentCount}
        likeCount={item.likeCount}
        view={item.hit}
      />
      // </Link>
    ))}
  </PostGrid>
);

export default PostList;
