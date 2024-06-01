import { Link } from "react-router-dom";
import { GongkademyLogo, GongkademyText } from "@assets/svg/logo";
import { LogoContainer, LogoBlock } from "./Logo.style";
import { Teacher } from "@assets/svg/titles";

export const Logo = (isLink) => {
  const handleLogoClick = (e) => {
    if (!isLink) e.preventDefault();
  };
  return (
    <LogoBlock>
      <Link to="/" onClick={handleLogoClick}>
        <LogoContainer>
          <GongkademyLogo />
          <GongkademyText />
        </LogoContainer>
      </Link>
    </LogoBlock>
  );
};
