import { useState, useEffect, useReducer } from "react";
import { SelectedPostBtn, PostGrid, TopBtnBox } from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";
import MyCommunityPagination from "./MyCommunityPagination";
import {
  fetchMyQnAData,
  fetchMyConsultingData,
  fetchLikeQnaData,
  fetchLikeConsultingData,
  fetchScrapConsultingData,
} from "@apis/myCommunity/myCommunityApi.js";
import DropDown from "@components/myCommunity/DropDown.jsx";
import PostList from "@components/myCommunity/PostList.jsx";

const MyCommunityPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownType, setDropDownType] = useState("qna");

  const [postType, setPostType] = useState("likePost");
  const [postArr, setPostArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const qnaData = await fetchMyQnAData();
      // const likedQndData = await fetchLikeQnaData();
      const consultingData = await fetchMyConsultingData();
      const likedConsultingData = await fetchLikeConsultingData();
      const scrappedConsultingData = await fetchScrapConsultingData();
      // if (postType === "myPost" && dropDownType === "qna") {
      //   setPostArr(qnaData);
      //

      if (postType === "myPost" && dropDownType === "consulting") {
        setPostArr(consultingData.data);
      } else if (postType === "likePost" && dropDownType === "consulting") {
        setPostArr(likedConsultingData.data);
      } else if (postType === "scrapPost" && dropDownType === "consulting") {
        setPostArr(scrappedConsultingData.data);
      } else {
        setPostArr([]);
      }
    };
    fetchData();
  }, [postType, dropDownType]);
  console.log(postType, postArr);

  return (
    <>
      <TopBtnBox>
        <Flex gap="16px">
          <SelectedPostBtn
            onClick={() => {
              setPostType("myPost");
            }}
            selected={postType === "myPost"}
          >
            내가 쓴 게시글
          </SelectedPostBtn>
          <SelectedPostBtn
            onClick={() => {
              setPostType("likePost");
            }}
            selected={postType === "likePost"}
          >
            좋아요 누른 게시글
          </SelectedPostBtn>

          <SelectedPostBtn
            onClick={() => {
              setPostType("scrapPost");
            }}
            selected={postType === "scrapPost"}
          >
            스크랩한 게시글
          </SelectedPostBtn>
        </Flex>

        <DropDown
          dropDown={dropDown}
          setDropDown={setDropDown}
          dropDownType={dropDownType}
          setDropDownType={setDropDownType}
        />
      </TopBtnBox>
      {!postArr.length ? (
        <p>"게시글이 없습니다"</p>
      ) : (
        <PostList
          posts={postArr}
          // totalPage={postArr.totalPage} //이 데이터가 잘 넘어가는지 확인. likePost에는 totalPage와 totalCount 데이터가 없음
          // totalCount={postArr.totalCount} //이 데이터가 잘 넘어가는지 확인
        />
      )}

      <MyCommunityPagination />
    </>
  );
};

export default MyCommunityPage;
