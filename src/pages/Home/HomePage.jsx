import { CourseCard } from "@components/course/CourseCard";
import { CourseContianer } from "@components/course/CourseCard.style";
import { QuestionMark, Teacher } from "@assets/svg/titles";
import { PageBlock } from "@components/common/page/PageBlock";
import { PageTitle } from "@components/common/page/PageTitle";
import { ConcernCard } from "@components/concern/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
import { ConcernContianer } from "@components/concern/ConcernCard.style";
import { COURSE_LIST } from "@dummy/Course";
import { GongkademyLogo } from "@assets/svg/logo";
const COURSES = COURSE_LIST;
const CONCERNS = CONCERN_LIST;
const HomePage = () => {
  return (
    <>
      <PageBlock>
        <PageTitle>
          <Teacher />
          <h2>이런 강좌는 어떠세요?</h2>
        </PageTitle>
        <CourseContianer>
          {COURSES.map((course) => (
            <CourseCard course={course} key={course.url} />
          ))}
        </CourseContianer>
      </PageBlock>
      <PageBlock>
        <PageTitle>
          <QuestionMark />
          <h2>이런 고민도 있어요</h2>
        </PageTitle>
        <ConcernContianer>
          {CONCERNS.map((concern) => (
            <ConcernCard concern={concern} />
          ))}
        </ConcernContianer>
      </PageBlock>
    </>
  );
};

export default HomePage;
