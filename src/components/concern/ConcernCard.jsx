import {
  ConcernBlock,
  ContentContainer,
  ContentPreview,
  Date,
  Title,
} from "@components/concern/ConcernCard.style";
import { useNavigate } from "react-router-dom";
export const ConcernCard = ({ concern }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(`concern/${concern.id}`);
  };

  return (
    <ConcernBlock onClick={handleClickConcernCard}>
      <ContentContainer>
        <Title>{concern.title}</Title>
        <ContentPreview>{concern.bodyPreview}</ContentPreview>
      </ContentContainer>
      <Date>{concern.date}</Date>
    </ConcernBlock>
  );
};
