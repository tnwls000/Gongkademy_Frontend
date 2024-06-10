import { HeaderBlock, LectureTitle } from "./index.style";
import { lecture } from "../../../dummy/lecture/lecture";
import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";
import { ArrowLeft } from "@/assets/svg/icons";
import { Flex } from "../../common/flex/Flex";
import { Text } from "../../common/text/Text";
const LectureHeader = () => {
  console.log(lecture);
  console.log(lecture.courseId);
  return (
    <HeaderBlock>
      <Link to={PATH.COURSE_DETAIL(lecture.courseId)}>
        <Flex align="center" height="2rem" gap="0.5rem">
          <ArrowLeft width={16} height={16} />
          <Text typo="bodySm700">강의 상세</Text>
        </Flex>
      </Link>

      <Text typo="bodyLg700">{lecture.lectureTitle}</Text>

      <Text typo="bodyLg700">강의자료</Text>
    </HeaderBlock>
  );
};

export default LectureHeader;
