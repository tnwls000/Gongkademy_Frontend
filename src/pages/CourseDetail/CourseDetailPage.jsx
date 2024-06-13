import { Outlet } from "react-router-dom";

import CourseDetailTop from "../../components/courseDetail/courseDetailTop/CourseDetailTop";
import CourseMenu from "@components/courseDetail/courseMenu/CourseMenu";
const CourseDetailPage = () => {
  return (
    <main>
      <CourseDetailTop />
      <CourseMenu />
      <Outlet />
    </main>
  );
};

export default CourseDetailPage;
