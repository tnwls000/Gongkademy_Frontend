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
  const [nocompletedCourseArr, setNocompletedCourseArr] = useState([]);
  const [completedCourseArr, setCompletedCourseArr] = useState([]);
  const [totalCourseIdArr, setTotalCourseIdArr] = useState([]);
  //수강 중인 강의 API get
  const fetchnoncompletedCourseData = async () => {
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
      setNocompletedCourseArr(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  //완료한 강의 API get
  const fetchcompletedCourseData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/course/complete",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setCompletedCourseArr(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  //전체 강좌 목록 조회 API get
  const getTotalCourseList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/course", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const courseArr = response.data;
      // setTotalCourseIdArr(courseArr.map((course) => course.courseId)); id만 가져오기
      setTotalCourseIdArr(courseArr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // effect: 컴포넌트 마운트 시 데이터를 로드
  useEffect(() => {
    const fetchData = async () => {
      await fetchnoncompletedCourseData();
      await fetchcompletedCourseData();
      await getTotalCourseList();
    };

    fetchData();
  }, []);

  // effect: totalCourseIdArr가 변경될 때 불필요한 강좌 삭제
  useEffect(() => {
    const totalCourseIds = totalCourseIdArr.map((course) => course.courseId);

    const filterInvalidCourses = (courseArr) => {
      return courseArr.filter((course) =>
        totalCourseIds.includes(course.courseId)
      );
    };

    setCompletedCourseArr(filterInvalidCourses(completedCourseArr));
    setNocompletedCourseArr(filterInvalidCourses(nocompletedCourseArr));

    console.log(totalCourseIdArr); // 상태가 변경될 때 최신 totalCourseIdArr 출력
  }, [totalCourseIdArr]);

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
      {myProcessingCourseBtn ? (
        <MyCourseGrid>
          {nocompletedCourseArr.map((course) => {
            return <MyCourseCard courseName={course.title} />;
          })}
        </MyCourseGrid>
      ) : completedCourseArr.length === 0 ? (
        <p>"아직 수강 완료한 강좌가 없습니다. 분발하세요!"</p>
      ) : (
        <MyCourseGrid>
          {completedCourseArr.map((course) => {
            return <MyCourseCard courseName={course.title} />;
          })}
        </MyCourseGrid>
      )}
    </>
  );
};

export default MyCoursePage;
