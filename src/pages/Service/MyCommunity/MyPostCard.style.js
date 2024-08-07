import styled from "styled-components";
import { color, typo } from "@styles/style";

export const MyPostContainer = styled.div`
  width: 724px;
  height: 116px;
  padding: 16px 12px;
  border-bottom: solid 1px black;
`;

export const MyPostTitle = styled.p`
  font: ${typo.bodyLg700};
  color: ${color.black};
`;

export const MyPostText = styled.p`
  font: ${typo.bodySm400};
  color: ${color.gray900};
`;
export const MyPostNickName = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray500};
`;
export const MyPostTime = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray500};
`;
export const MyPostCourseName = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray500};
`;

export const MyPostComment = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray600};
`;
export const MyPostLike = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray600};
`;
export const MyPostView = styled.p`
  font: ${typo.captionRg400};
  color: ${color.gray600};
`;
