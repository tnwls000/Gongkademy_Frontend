import { Flex } from "../../common/flex/Flex";
import Text from "@components/common/text/Text";

const CourseSummary = () => {
  return (
    <Flex direction="column">
      <Text typo="titleSm700">재료역학 전단력과 굽힘모멘트</Text>
      <div>별점</div>
      <Text>4.6</Text>
      <Flex>
        <Text typo="bodySm400">수강평 100개</Text>
        <Text typo="bodySm400">수강평 100개</Text>
      </Flex>
      <Flex>
        <Text typo="bodySm400">50개의 강의</Text>
        <Text typo="bodySm400">(18시간)</Text>
      </Flex>
      {/* <Button>수강하기</Button> */}
    </Flex>
  );
};

export default CourseSummary;
