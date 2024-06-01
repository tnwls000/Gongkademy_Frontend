import { Routes, Route } from "react-router-dom";
import SignUpPage from "@pages/Signup/SignUpPage";
import MyPage from "@pages/MyPage/MyPage";
import CoursesPage from "@pages/Courses/CoursesPage";
import HomePage from "@pages/Home/HomePage";
import CourseDetailPage from "@pages/CourseDetail/CourseDetailPage";
import LecturePage from "@pages/Lecture/LecturePage";
import CommunityArticlePage from "@pages/CommunityArticle/CommunityArticlePage";
import CommunityPage from "@pages/Community/CommunityPage";

import { PATH } from "./Constants";
import { PrivateRoutes } from "./PrivateRoutes";

const AppRouter = () => {
  // TODO: PrivateRouter 주석 해제
  return (
    <Routes>
      {/* 인증과 관계없음 */}
      <Route path={PATH.ROOT} element={<HomePage />} />
      <Route path={PATH.COURSES} element={<CoursesPage />} />
      <Route
        path={PATH.COURSE_DETAIL(`:courseId`)}
        element={<CourseDetailPage />}
      />
      <Route
        path={PATH.COMMUNITY(`:communityType`)}
        element={<CommunityPage />}
      />
      <Route
        path={PATH.COMMUNITY_ARTICLE(`:communityType,:articleId`)}
        element={<CommunityArticlePage />}
      />
      <Route path={PATH.LECTURE(`:lectureId`)} element={<LecturePage />} />

      {/* 로그인시에만 사용 */}
      {/* <Route element={<PrivateRoutes />}> */}
      <Route path={PATH.MY_PAGE} element={<MyPage />} />
      {/* </Route> */}
      {/* 비로그인시에만 사용 */}
      <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRouter;
