export const BASE_URL = import.meta.env.VITE_APP_SERVICE_API_URL;

export const END_POINT = {
  MEMBERS: "members",
  MEMBER: (memberId) => `members/${memberId}`,

  LOGIN: "members/login",
};
