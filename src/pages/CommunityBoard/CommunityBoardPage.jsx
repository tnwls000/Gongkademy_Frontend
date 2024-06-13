import NoticeCard from "./NoticeCard";
import { NOTICE_LIST } from "@dummy/Notice";
const notices = NOTICE_LIST;
const CommunityBoardPage = () => {
  return (
    <div>
      <NoticeCard notice={notices[0]} />
      <NoticeCard notice={notices[1]} />
      <NoticeCard notice={notices[2]} />
    </div>
  );
};

export default CommunityBoardPage;
