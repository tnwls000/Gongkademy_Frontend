import { Outlet } from "react-router-dom";

const CourseDetailPage = () => {
  return (
    <div>
      <p>강의상세페이지</p>
      <Outlet />
    </div>
  );
};

export default CourseDetailPage;
