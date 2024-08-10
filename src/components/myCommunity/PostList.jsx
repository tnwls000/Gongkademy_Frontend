// components/PostList.js
import React from "react";
import MyPostCard from "@pages/Service/MyCommunity/MyPostCard";
import { PostGrid } from "./PostList.style";

const PostList = ({ posts, totalPage, totalCount }) => (
  // <PostGrid totalPage={totalPage} totalCount={totalCount}>
  <PostGrid>
    {posts.map((item) => (
      <MyPostCard
        key={item.articleId}
        title={item.title}
        content={item.content}
        nickName={item.nickname}
        createTime={item.createTime}
        courseTitle={item.courseTitle}
        commentCount={item.commentCount}
        likeCount={item.likeCount}
      />
    ))}
  </PostGrid>
);

export default PostList;
