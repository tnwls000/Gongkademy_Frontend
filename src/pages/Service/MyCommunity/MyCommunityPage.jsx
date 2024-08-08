import { useState, useEffect, useReducer } from "react";
import { SelectedPostBtn, PostGrid, TopBtnBox } from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";
import MyPostCard from "./MyPostCard";
import MyCommunityPagination from "./MyCommunityPagination";
import axios from "axios";
import { DropUpIcon, DropDownIcon } from "@assets/svg/icons";
import {
  fetchMyQnAData,
  fetchMyConsultingData,
} from "@apis/myCommunity/myCommunityApi.js";
import DropDown from "@components/myCommunity/DropDown.jsx";
import PostList from "@components/myCommunity/PostList.jsx";

const MyCommunityPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownQnA, setDropDownQnA] = useState(true);

  const [postType, setPostType] = useState("myPost");

  const [myQnAArrPage, setMyQnAArrPage] = useState([]);
  const [myQnAArr, setMyQnAArr] = useState([]);

  const [myConsultingArrPage, setMyConsultingArrPage] = useState([]);
  const [myConsultingArr, setMyConsultingArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const qnaData = await fetchMyQnAData();
      const consultingData = await fetchMyConsultingData();
      setMyQnAArrPage(qnaData);
      setMyQnAArr(qnaData.data);
      setMyConsultingArrPage(consultingData);
      setMyConsultingArr(consultingData.data);
    };

    fetchData();
  }, []);

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
          dropDownQnA={dropDownQnA}
          setDropDownQnA={setDropDownQnA}
        />
      </TopBtnBox>

      {postType === "myPost" && dropDownQnA && (
        <PostList
          posts={myQnAArr}
          totalPage={myQnAArrPage.totalPage}
          totalCount={myQnAArrPage.totalCount}
        />
      )}
      {postType === "myPost" && !dropDownQnA && (
        <PostList
          posts={myConsultingArr}
          totalPage={myConsultingArrPage.totalPage}
          totalCount={myConsultingArrPage.totalCount}
        />
      )}

      <MyCommunityPagination />
    </>
  );
};

export default MyCommunityPage;
