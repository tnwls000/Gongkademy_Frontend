import { CourseMenuBlock, StyledLink } from "./CourseMenu.style";
import { PATH } from "@router/Constants";
import Text from "@components/common/text/Text";
const CourseMenu = () => {
  return (
    <CourseMenuBlock>
      <StyledLink to={PATH.COURSE_INTRODUCTION(2)} end>
        <Text typo="titleSm700">강의소개</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_CURRICULUM(2)} end>
        <Text typo="titleSm700">목차</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_QNA(2)} end>
        <Text typo="titleSm700">QnA</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_REVIEW(2)} end>
        <Text typo="titleSm700">수강평</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_NOTICE(2)} end>
        <Text typo="titleSm700">공지사항</Text>
      </StyledLink>
    </CourseMenuBlock>
  );
};

export default CourseMenu;
