import { CourseDetailTopBlock } from "./CourseDetailTop.style";
import CourseThumbnail from "../courseThumbnail/CourseThumbnail";
import CourseSummary from "../courseSummary/CourseSummary";

const CourseDetailTop = () => {
  return (
    <CourseDetailTopBlock>
      <CourseThumbnail />
      <CourseSummary />
    </CourseDetailTopBlock>
  );
};

export default CourseDetailTop;
