export const PATH = {
  ROOT: "/",
  COURSES: "/courses",

  //강좌는 Course, 강의 1개는 lecture
  COURSES: "/courses",
  COURSE_DETAIL: (courseId) => `/course/${courseId}`,
  LECTURE: (lectureId) => `/lecture/${lectureId}`, //TODO: queryString 방식으로 변경 예정

  COMMUNITY: (communityType) => `/community/${communityType}`,
  //TODO: 상수명이 마음에 안들어
  COMMUNITY_BOARD: (communityType, boardId) => `/${communityType}/${boardId}`,

  MY_PAGE: "/mypage",

  SIGN_UP: "member/signup",
};
