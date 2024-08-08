import { useState, useEffect } from "react";
import {
  SelectedPostBtn,
  DropDownButton,
  DropDownLi,
  DropDownFlex,
  PostGrid,
  TopBtnBox,
} from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";
import MyPostCard from "./MyPostCard";
import MyCommunityPagination from "./MyCommunityPagination";
import axios from "axios";

const MyCommunityPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownQnA, setDropDownQnA] = useState(true);

  // const [myPostBtn, setMyPostBtn] = useState(true);
  // const [listPostBtn, setListPostBtn] = useState(false);
  // const [scrapPostBtn, setScrapPostBtn] = useState(false);
  const [postType, setPostType] = useState("myPost");

  const [myPostArr, setMyPostArr] = useState([]);
  const [myQnAArr, setMyQnAArr] = useState([]);
  //내 고민 api 불러오기
  const fetchMyPostData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/community/consulting",
        // 여기서는 8080이 안 되고 3000으로 해야 됨
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response); //데이터가 안 불러와지는데... post가 안 된 거 아닐까...
      setMyPostArr(response.data);
      console.log("내 게시글", myPostArr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  //QnA API get
  const fetchMyQnAData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/coucommunity/question",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setMyQnAArr(response.data);
      console.log("QnA 불러오기", myQnAArr);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMyPostData();
      await fetchMyQnAData();
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

        {/* 드롭다운 */}
        <DropDownButton
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <Flex justify="space-evenly" align="center">
            {dropDownQnA ? "Q&A" : "고민"}

            {dropDown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
              </svg>
            )}
          </Flex>
          {dropDown && (
            <DropDownFlex>
              <DropDownLi
                onClick={() => {
                  setDropDownQnA(true);
                }}
              >
                Q&A
              </DropDownLi>
              <DropDownLi
                onClick={() => {
                  setDropDownQnA(false);
                }}
              >
                고민
              </DropDownLi>
            </DropDownFlex>
          )}
        </DropDownButton>
      </TopBtnBox>

      <PostGrid>
        <MyPostCard />
        <MyPostCard />
        <MyPostCard />
        <MyPostCard />
      </PostGrid>
      <MyCommunityPagination />
    </>
  );
};

export default MyCommunityPage;
