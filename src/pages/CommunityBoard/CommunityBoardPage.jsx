import { useLocation } from "react-router-dom";
import NoticeCard from "./Card/NoticeCard";
import { NOTICE_LIST } from "@dummy/Notice";
import { QNA_LIST } from "@dummy/Qna";
import QnaCard from "@pages/CommunityBoard/Card/QnaCard";
import ConcernCard from "@pages/CommunityBoard/Card/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
const CONCERNS = CONCERN_LIST;
const notices = NOTICE_LIST;
const qnas = QNA_LIST;
const CommunityBoardPage = () => {
  const location = useLocation();
  console.log("Pathname:", location.pathname);
  console.log("Notices:", notices);
  console.log("QnAs:", qnas);
  return (
    <div>
      {location.pathname.includes("Q&A") ? (
        <div>
          <NoticeCard notice={notices[0]} />
          <NoticeCard notice={notices[1]} />
          <NoticeCard notice={notices[2]} />
          <br></br>
          {qnas.map((qna) => (
            <>
              <QnaCard qna={qna} key={qna.id} />
              <hr />
            </>
          ))}
        </div>
      ) : (
        <div>
          {CONCERNS.map((concern) => (
            <ConcernCard concern={concern} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityBoardPage;
