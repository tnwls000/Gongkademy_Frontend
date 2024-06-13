import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@pages/Community/NavBar";
import {
  Container,
  ContentContainer,
} from "./CommunityPage.style";
const CommunityPage = () => {
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar />
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
