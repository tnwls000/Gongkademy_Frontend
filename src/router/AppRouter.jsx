import SignUpPage from "@pages/Signup/SignUpPage";
import MyPage from "@pages/MyPage/MyPage";
import CoursesPage from "@pages/Courses/CoursesPage";
import HomePage from "@pages/Home/HomePage";
import CourseDetailPage from "@pages/CourseDetail/CourseDetailPage";
import LecturePage from "@pages/Lecture/LecturePage";
import CommunityBoardPage from "@pages/CommunityBoard/CommunityBoardPage";
import CommunityPage from "@pages/Community/CommunityPage";

import { PATH } from "./Constants";
import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

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
        },

        {
          path: PATH.LECTURE(`:lectureId`),
          element: <LecturePage />,
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
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
