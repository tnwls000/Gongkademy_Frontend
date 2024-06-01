import { PageTitle } from "@components/common/page/PageTitle";
import { MyPageContainer, Tab } from "./MyPage.style";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <PageTitle>마이페이지</PageTitle>
      <MyPageContainer>
        <Link to="update">
          <Tab>내 정보 수정</Tab>
        </Link>
        <Link to="/">
          <Tab>내가 쓴 질문</Tab>
        </Link>
      </MyPageContainer>
    </>
  );
};

export default MyPage;
