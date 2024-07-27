import { useEffect, useState } from "react";
import { SelectContainer } from "./communityRegist.style";
import Select from "@components/common/select/Select";
import {
  getAllCourses,
  getAllCourseContents,
} from "@apis/course/courseApi";
const RegistCourse = ({
  selectedCourse,
  setSelectedCourse,
  selectedLecture,
  setSelectedLecture,
}) => {
  const [courseOptions, setCourseOptions] =
    useState([]);
  const [lectureOptions, setLectureOptions] =
    useState([]);
  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      const coursesTitle = response.data.map(
        (course) => course.title
      );
      setCourseOptions(coursesTitle);
      console.log(
        "Fetched courses: ",
        coursesTitle
      );
    } catch (error) {
      console.error(
        "Failed to fetch courses: ",
        error
      );
    }
  };
  const fetchLectures = async (id) => {
    try {
      const response = await getAllCourseContents(
        id
      );
      const lecturesTitle = response.data.map(
        (lecture) => lecture.title
      );
      setLectureOptions(lecturesTitle);
      console.log(
        "Fetched courses: ",
        lecturesTitle
      );
    } catch (error) {
      console.error(
        "Failed to fetch courses: ",
        error
      );
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  useEffect(() => {
    fetchLectures(
      courseOptions.indexOf(selectedCourse) + 1
    );
  }, [selectedCourse]);
  return (
    <SelectContainer>
      <Select
        options={courseOptions}
        selectedValue={selectedCourse}
        setSelectedValue={setSelectedCourse}
        width={"18.5rem"}
      />
      <Select
        options={lectureOptions}
        selectedValue={selectedLecture}
        setSelectedValue={setSelectedLecture}
        width={"18.5rem"}
      />
    </SelectContainer>
  );
};
export default RegistCourse;
