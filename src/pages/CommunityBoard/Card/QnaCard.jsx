import {
  CardContainer,
  Title,
  Content,
  ContentContainer,
  TitleContainer,
  InfoContainer,
} from "./QnaCard.style.js";
import {
  BookMark,
  Like,
  LikeActive,
  Visible,
  Chat,
} from "@assets/svg/icons";
const QnaCard = ({ qna }) => {
  return (
    <CardContainer>
      <TitleContainer>
        <Title>{qna.title}</Title>
        <BookMark width="16" height="16" />
      </TitleContainer>
      <Content>{qna.content}</Content>
      <InfoContainer>
        <ContentContainer>
          <Content>{qna.writer}</Content>
          <Content>3분전</Content>
          <Content>{qna.course}</Content>
        </ContentContainer>
        <ContentContainer>
          <Content>
            <Chat width="16" height="16" />
            12
          </Content>
          <Content>
            <Like width="16" height="16" />
            {qna.like}
          </Content>
          <Content>
            <Visible width="16" height="16" />
            {qna.viewCnt}
          </Content>
        </ContentContainer>
      </InfoContainer>
    </CardContainer>
  );
};
export default QnaCard;
