// api/community.js
import axios from "axios";

export const fetchMyQnAData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/community/question/myboard",
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchMyConsultingData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/community/consulting/myboard",
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
