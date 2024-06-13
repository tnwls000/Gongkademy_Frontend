import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@pages/Community/NavBar";
import { Button } from "@components/common/button/Button";
import {
  Container,
  ContentContainer,
} from "./CommunityPage.style";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { PATH } from "@router/Constants";
import CommunityBoardPage from "../CommunityBoard/CommunityBoardPage";
const CommunityPage = () => {
  const location = useLocation();
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar />
        <CommunityBoardPage />
        <Link
          to={
            location.pathname.split("/")[2] ===
            "Q&A"
              ? PATH.COMMUNITY_MAKE_QNA()
              : PATH.COMMUNITY_MAKE_CONCERN()
          }
        >
          <Button
            fill
            bold
            style={{
              width: "45%",
              justifyContent: "center",
              position: "absolute",
              bottom: "3rem",
              left: "30%",
              zIndex: 1000, // 다른 요소들 위에 렌더링되도록 설정
            }}
          >
            ✍️{" "}
            {location.pathname.includes("Q&A")
              ? "질문하기"
              : "고민 나누기"}
          </Button>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
