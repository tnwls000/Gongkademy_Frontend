import { Navigate } from "./NavBar.style";
import { Button } from "@components/common/button/Button";
import { PATH } from "@router/Constants";
import {
  Link,
  useLocation,
} from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <Navigate>
      <Link to={"/community/qna"}>
        <Button
          type="normal"
          shape={
            location.pathname.includes(
              "community/qna"
            )
              ? "textBold"
              : "textRg"
          }
        >
          🙋 Q&A
        </Button>
      </Link>
      <Link to={"/community/concern"}>
        <Button
          type="normal"
          shape={
            location.pathname.includes(
              "community/concern"
            )
              ? "textBold"
              : "textRg"
          }
        >
          🤔 고민
        </Button>
      </Link>
    </Navigate>
  );
};
export default NavBar;
