const LecturePlayer = ({ lecture }) => {
  console.log(lecture);
  return (
    <iframe
      width="100%"
      height="720px"
      src={"https://www.youtube.com/embed/" + lecture.url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
};

export default LecturePlayer;
