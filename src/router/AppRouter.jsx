import { PATH } from "@router/Constants";
import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@pages/Home/HomePage";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

import CommunityBoardPage from "@pages/CommunityBoard/CommunityBoardPage";
import CommunityPage from "@pages/Community/CommunityPage";

import CourseIntroduction from "@pages/CourseDetail/CourseIntroduction";
import CourseCurriculum from "@pages/CourseDetail/CourseCurriculum";
import CourseQnA from "@pages/CourseDetail/CourseQnA";
import CourseReview from "@pages/CourseDetail/CourseReview";
import CourseNotice from "@pages/CourseDetail/CourseNotice";
import CourseDetailPage from "@pages/CourseDetail/CourseDetailPage";
import LecturePage from "@pages/Lecture/LecturePage";
import CoursesPage from "@pages/Courses/CoursesPage";

import SignUpPage from "@pages/Signup/SignUpPage";
import MyPage from "@pages/MyPage/MyPage";

const AppRouter = () => {
  const routes = [
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { path: PATH.ROOT, element: <HomePage /> },

        // 커뮤니티 관련 Route
        { path: PATH.COMMUNITY(`:communityType`), element: <CommunityPage /> },
        {
          path: PATH.COMMUNITY_BOARD(`:communityType,:boardId`),
          element: <CommunityBoardPage />,
        },

        // 강의 관련 Route
        { path: PATH.COURSES, element: <CoursesPage /> },
        {
          path: PATH.COURSE_DETAIL(`:courseId`),
          element: <CourseDetailPage />,
          children: [
            {
              path: PATH.COURSE_INTRODUCTION(`:courseId`),
              element: <CourseIntroduction />,
            },
            {
              path: PATH.COURSE_CURRICULUM(`:courseId`),
              element: <CourseCurriculum />,
            },
            { path: PATH.COURSE_QNA(`:courseId`), element: <CourseQnA /> },
            {
              path: PATH.COURSE_REVIEW(`:courseId`),
              element: <CourseReview />,
            },
            {
              path: PATH.COURSE_NOTICE(`:courseId`),
              element: <CourseNotice />,
            },
          ],
        },

        //계정 관련 Route
        {
          path: PATH.MY_PAGE,
          element: <MyPage />,
        },
        {
          path: PATH.SIGN_UP,
          element: <SignUpPage />,
        },
      ],
    },

    //header, footer없음
    {
      path: PATH.LECTURE,
      element: <LecturePage />,
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
