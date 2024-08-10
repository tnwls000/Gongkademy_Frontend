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
  NonFilledBookmarkIcon,
  NonFilledLikeIcon,
  ViewIcon,
} from "@assets/svg/icons";

const MyPostCard = ({
  title,
  content,
  nickName,
  createTime,
  courseTitle,
  commentCount,
  likeCount,
}) => {
  return (
    <MyPostContainer>
      <Flex height="100%" direction="column" justify="space-between">
        <Flex justify="space-between" align="flex-start">
          <MyPostTitle>{title}</MyPostTitle>
          <NonFilledBookmarkIcon width="24" height="24" />
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
              <NonFilledLikeIcon width="16" height="16" />
              <MyPostLike>{likeCount}</MyPostLike>
            </Flex>
            <Flex align="center" gap="4px">
              <ViewIcon width="16" height="16" />

              <MyPostView>조회수</MyPostView>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MyPostContainer>
  );
};

export default MyPostCard;
