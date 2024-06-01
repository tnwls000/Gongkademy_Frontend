import { useNavigate } from "react-router-dom";
import {
  CourseBlock,
  SubjectContainer,
  SubjectDesc,
  SubjectTitle,
  Thumbnail,
} from "@components/course/CourseCard.style";

export const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const handleClickCourseCard = () => {
    navigate(`course/${course.id}`);
  };
  return (
    <CourseBlock onClick={handleClickCourseCard}>
      <Thumbnail>
        <img
          src={"https://img.youtube.com/vi/" + course.url + "/mqdefault.jpg"}
          alt="썸네일"
        ></img>
      </Thumbnail>
      <SubjectContainer>
        <SubjectTitle>{course.title}</SubjectTitle>
        <SubjectDesc>{course.desc}</SubjectDesc>
      </SubjectContainer>
    </CourseBlock>
  );
};
