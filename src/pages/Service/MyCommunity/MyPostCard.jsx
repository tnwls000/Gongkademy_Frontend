import { Flex } from "@components/common/flex/Flex";
import {
  MyPostContainer,
  MyPostTitle,
  MyPostText,
  MyPostNickName,
  MyPostTime,
  MyPostCourseName,
  MyPostComment,
  MyPostLike,
  MyPostView,
} from "./MyPostCard.style";
import {
  CommentIcon,
  FilledBookmarkIcon,
  FilledLikeIcon,
  NonFilledBookmarkIcon,
  NonFilledLikeIcon,
  ViewIcon,
} from "@assets/svg/icons";
import { END_POINT } from "@apis/apiConstants";
import { PATH } from "@router/Constants";

const MyPostCard = ({
  title,
  scrapCount,
  content,
  nickName,
  createTime,
  courseTitle,
  commentCount,
  likeCount,
  view,
}) => {
  return (
    <MyPostContainer>
      <Flex height="100%" direction="column" justify="space-between">
        <Flex justify="space-between" align="flex-start">
          <MyPostTitle>{title}</MyPostTitle>
          {!scrapCount ? (
            <NonFilledBookmarkIcon width="24" height="24" />
          ) : (
            <FilledBookmarkIcon width="24" height="24" />
          )}
        </Flex>
        <Flex align="center">
          <MyPostText>{content}</MyPostText>
        </Flex>
        <Flex justify="space-between" align="flex-end">
          <Flex gap="8px">
            <MyPostNickName>{nickName}</MyPostNickName>
            <MyPostTime>{createTime}</MyPostTime>
            <MyPostCourseName>{courseTitle}</MyPostCourseName>
          </Flex>
          <Flex gap="8px">
            <Flex align="center" gap="4px">
              <CommentIcon width="16" height="16" />
              <MyPostComment>{commentCount}</MyPostComment>
            </Flex>
            <Flex align="center" gap="4px">
              {!likeCount ? (
                <NonFilledLikeIcon width="16" height="16" />
              ) : (
                <FilledLikeIcon width="16" height="16" />
              )}

              <MyPostLike>{likeCount}</MyPostLike>
            </Flex>
            <Flex align="center" gap="4px">
              <ViewIcon width="16" height="16" />

              <MyPostView>{view}</MyPostView>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MyPostContainer>
  );
};

export default MyPostCard;
