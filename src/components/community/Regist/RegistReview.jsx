import Button from "@components/common/button/Button";
import { StyledSearchBar } from "@components/common/searchbar/Searchbar.style";
import { ContainerRow } from "./communityRegist.style";
const RegistReview = ({
  setContent,
  onClick,
}) => {
  return (
    <ContainerRow>
      <StyledSearchBar
        placeholder="댓글을 입력해주세요."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button fill onClick={onClick}>
        등록
      </Button>
    </ContainerRow>
  );
};
export default RegistReview;
