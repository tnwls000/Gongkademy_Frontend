import { Flex } from "@components/common/flex/Flex";
import MyCourseCard from "./MyCourseCard";
import {
  SelectedCourseTitle,
  MyCourseGrid,
  TitleFlex,
} from "./MyCoursePage.style";
import { useState, useEffect } from "react";
import axios from "axios";

const MyCoursePage = () => {
  const [courseArr, setCourseArr] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/course/nocomplete",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response);
      setCourseArr(response.data);
      console.log(courseArr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const [myProcessingCourseBtn, setMyProcessingCourseBtn] = useState(true);

  return (
    <>
      <Flex width="100%" justify="start">
        <Flex gap="52px">
          <SelectedCourseTitle
            onClick={() => {
              setMyProcessingCourseBtn(true);
            }}
            selected={myProcessingCourseBtn}
          >
            수강 중인 강의
          </SelectedCourseTitle>
          <SelectedCourseTitle
            onClick={() => {
              setMyProcessingCourseBtn(false);
            }}
            selected={!myProcessingCourseBtn}
          >
            수강 완료한 강의
          </SelectedCourseTitle>
        </Flex>
      </Flex>

      <MyCourseGrid>
        {courseArr.map((course) => {
          return <MyCourseCard courseName={course.title} />;
        })}
      </MyCourseGrid>
    </>
  );
};

export default MyCoursePage;
