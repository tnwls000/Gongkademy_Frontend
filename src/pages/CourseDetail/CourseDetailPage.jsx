import { Outlet } from "react-router-dom";

import CourseDetailTop from "../../components/courseDetail/courseDetailTop/CourseDetailTop";
const CourseDetailPage = () => {
  return (
    <main>
      <CourseDetailTop />

      <Outlet />
    </main>
  );
};

export default CourseDetailPage;
