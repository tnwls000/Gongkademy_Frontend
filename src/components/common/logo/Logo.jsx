import { Link } from "react-router-dom";
import { LogoImage, LogoText } from "@assets/svg/logo";
import { LogoContainer, LogoBlock } from "./Logo.style";
import { PATH } from "@router/Constants";

export const Logo = () => {
  return (
    <LogoBlock>
      <Link to={PATH.ROOT}>
        <LogoContainer>
          <LogoImage />
          <LogoText />
        </LogoContainer>
      </Link>
    </LogoBlock>
  );
};
