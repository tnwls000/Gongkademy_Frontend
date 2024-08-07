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

const MyPostCard = () => {
  return (
    <MyPostContainer>
      <Flex height="100%" direction="column" justify="space-between">
        <Flex justify="space-between" align="flex-start">
          <MyPostTitle>게시글 제목</MyPostTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="#000"
              stroke-width="1.5"
              d="M18.25 5v14.863l-5.955-2.552-.295-.127-.295.127-5.955 2.552V5c0-.35.116-.63.368-.881.253-.253.534-.368.883-.369H17c.35 0 .63.116.883.368.252.253.367.533.367.881Z"
            />
          </svg>
        </Flex>
        <Flex align="center">
          <MyPostText>본문 미리보기</MyPostText>
        </Flex>
        <Flex justify="space-between" align="flex-end">
          <Flex gap="8px">
            <MyPostNickName>닉네임</MyPostNickName>
            <MyPostTime>게시시간</MyPostTime>
            <MyPostCourseName>과목명</MyPostCourseName>
          </Flex>
          <Flex gap="8px">
            <Flex align="center" gap="4px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path
                  fill="#6B6E76"
                  d="M8 2C4.335 2 1.335 4.387 1.335 7.333A4.814 4.814 0 0 0 3.167 11c0 .4-.28 1.447-1.833 3a7.356 7.356 0 0 0 4.313-1.667c.76.22 1.56.334 2.354.334 3.666 0 6.666-2.387 6.666-5.334 0-2.946-3-5.333-6.666-5.333Zm0 9.333c-2.946 0-5.333-1.793-5.333-4 0-2.206 2.387-4 5.334-4 2.946 0 5.333 1.794 5.333 4 0 2.207-2.387 4-5.333 4Z"
                />
              </svg>
              <MyPostComment>댓글수</MyPostComment>
            </Flex>
            <Flex align="center" gap="4px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                fill="none"
              >
                <path
                  stroke="#6B6E76"
                  d="m7.578 2.068.421.663.422-.663C9.03 1.113 10.103.5 11.333.5c1.924 0 3.5 1.576 3.5 3.5 0 .85-.392 1.746-1.05 2.642-.652.89-1.534 1.735-2.434 2.471A26.099 26.099 0 0 1 8 11.425l-.062-.037A26.45 26.45 0 0 1 4.65 9.101c-.9-.738-1.782-1.584-2.435-2.474C1.557 5.732 1.166 4.84 1.166 4c0-1.924 1.576-3.5 3.5-3.5 1.23 0 2.304.613 2.912 1.568Z"
                />
              </svg>
              <MyPostLike>좋아요</MyPostLike>
            </Flex>
            <Flex align="center" gap="4px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path
                  fill="#6B6E76"
                  d="m2 8-.468-.176L1.466 8l.066.175L2 8Zm12 0 .468.176.066-.176-.066-.175L14 8Zm-11.532.175C3.266 6.048 5.43 4.5 8 4.5v-1c-2.97 0-5.519 1.791-6.468 4.324l.936.351ZM8 4.5c2.57 0 4.735 1.548 5.532 3.676l.936-.351C13.52 5.292 10.97 3.5 8 3.5v1Zm5.532 3.325C12.735 9.952 10.57 11.5 8 11.5v1c2.97 0 5.519-1.791 6.468-4.324l-.936-.351ZM8 11.5c-2.57 0-4.735-1.548-5.532-3.676l-.936.351C2.48 10.71 5.03 12.5 8 12.5v-1Z"
                />
                <circle cx="8" cy="8" r="2" stroke="#6B6E76" />
              </svg>

              <MyPostView>조회수</MyPostView>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MyPostContainer>
  );
};

export default MyPostCard;
