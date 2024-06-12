import { Logo } from "@components/common/logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderBlock,
  Container,
  NavBarItem,
  SearchBar,
  BtnContainer,
} from "@components/header/Header.style";
import { useContext, useState } from "react";
import { LoginModal } from "../login/LoginModal";
import Button from "@components/common/button/Button";
import { LoginContext } from "@contexts/LoginContext";
import { PATH } from "@router/Constants";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state, actions } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLoginBtnClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleLogoutClick = (e) => {
    e.preventDefault();
    actions.setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  return (
    <>
      <HeaderBlock>
        <Logo />

        <Container>
          <NavBarItem>
            <Link to={PATH.COURSES}>
              <Button type="normal" shape="textRg">
                강의
              </Button>
            </Link>
            <Link to={PATH.COMMUNITY("고민")}>
              <Button type="normal" shape="textRg">
                커뮤니티
              </Button>
            </Link>
          </NavBarItem>
        </Container>
        <SearchBar placeholder="어떤 걸 배워볼까요?"></SearchBar>

        {state.isLogin ? (
          <BtnContainer>
            <Link to={PATH.MY_PAGE}>
              <Button type="normal" shape="filledBold">
                마이페이지
              </Button>
            </Link>
            <Button type="normal" shape="textRg" onClick={handleLogoutClick}>
              로그아웃
            </Button>
          </BtnContainer>
        ) : (
          <BtnContainer>
            <Button type="normal" shape="textRg" onClick={handleLoginBtnClick}>
              로그인
            </Button>
            <Link to={PATH.SIGN_UP}>
              <Button type="normal" shape="filledBold">
                회원가입
              </Button>
            </Link>
          </BtnContainer>
        )}
      </HeaderBlock>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};
export default Header;
