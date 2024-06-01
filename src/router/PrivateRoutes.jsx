import { LoginModal } from "@components/login/LoginModal";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("accessToken");
  //토큰을 꺼내서 서버에 테스트를 받는다.
  //accessToken혹은 refreshToken을 보내서 아직 유효한지 보낸다.
  //유효하다면 privateRouter에 접근 가능
  const location = useLocation();
  console.log(location);

  //token이 유효하지 않다면 현재 url에서 모달이 등장한다.

  // return token ? <Outlet /> : <Navigate to={} />;
};
