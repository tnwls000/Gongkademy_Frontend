import { FooterBlock } from "./LectureFooter.style";
import { ArrowLeft, ArrowRight } from "@/assets/svg/icons";
import { Flex } from "../../common/flex/Flex";
import { Text } from "../../common/text/Text";
import { Link } from "react-router-dom";
import { PATH } from "@router/Constants";
const LectureFooter = ({ lecture }) => {
  return (
    <FooterBlock>
      <Link to={PATH.LECTURE(lecture.order - 1)}>
        <Flex align="center" gap="0.5rem" padding="0.25rem 3rem">
          <ArrowLeft width={16} height={16} />
          <Text typo="bodyRg400">이전 수업</Text>
        </Flex>
      </Link>
      <Link to={PATH.LECTURE(lecture.order + 1)}>
        <Flex align="center" gap="0.5rem" padding="0.25rem 3rem">
          <Text typo="bodyRg400">다음 수업</Text>
          <ArrowRight width={16} height={16} />
        </Flex>
      </Link>
    </FooterBlock>
  );
};

export default LectureFooter;
