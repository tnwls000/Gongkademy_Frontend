import {
  CardContainer,
  Title,
  TitleContainer,
  ContentContainer,
  Content,
} from "./ConcernCard.style";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@/assets/svg/icons";
const ConcernCard = ({ concern }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(`concern/${concern.id}`);
  };

  return (
    <CardContainer>
      <TitleContainer>
        <Title>{concern.title}</Title>
        <ArrowRight width="16" height="16" />
      </TitleContainer>
      <Content>{concern.bodyPreview}</Content>
      <ContentContainer>
        <Content>{concern.date}</Content>
      </ContentContainer>
    </CardContainer>
  );
};
export default ConcernCard;
