// api/community.js
import axios from "axios";
import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

export const fetchMyQnAData = async () => {
  try {
    const response = await axiosInstance.get(
      END_POINT.COMMUNITY_QUESTION_MYBOARD
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchMyConsultingData = async () => {
  try {
    const response = await axiosInstance.get(
      END_POINT.COMMUNITY_CONSULTING_MYBOARD
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchLikeQnaData = async () => {
  try {
    const response = await axiosInstance.get(
      END_POINT.COMMUNITY_QUESTION_LIKED
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchLikeConsultingData = async () => {
  try {
    const response = await axiosInstance.get(
      END_POINT.COMMUNITY_CONSULTING_LIKED
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchScrapConsultingData = async () => {
  try {
    const response = await axiosInstance.get(
      END_POINT.COMMUNITY_CONSULTING_SCRAPPED
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
