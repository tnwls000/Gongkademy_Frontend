import LectureHeader from "@components/lecture/lectureHeader/LectureHeader";
import LecturePlayer from "@components/lecture/lecturePlayer/LecturePlayer";
import LectureFooter from "@components/lecture/lectureFooter/LectureFooter";
import { lecture } from "@dummy/lecture/lecture";
const LecturePage = () => {
  //param긁어와서 업데이트
  return (
    <div>
      <LectureHeader lecture={lecture} />
      <LecturePlayer lecture={lecture} />
      <LectureFooter lecture={lecture} />
    </div>
  );
};

export default LecturePage;
