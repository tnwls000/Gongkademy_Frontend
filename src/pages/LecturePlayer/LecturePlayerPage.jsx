import LectureHeader from "@components/lecture/lectureHeader";
import LecturePlayer from "@components/lecture/lecturePlayer";
import LectureFooter from "../../components/lecture/lectureFooter";

const LecturePage = () => {
  return (
    <div>
      <LectureHeader />
      <LecturePlayer />
      <LectureFooter />
    </div>
  );
};

export default LecturePage;
