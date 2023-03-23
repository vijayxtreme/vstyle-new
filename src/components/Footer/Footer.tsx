import { StyledFooter } from "./FooterStyled";
import { EN_US as lang } from "@/lang/en-US";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {lang.author} | Copyright &copy; {new Date().getFullYear()}
      </p>
    </StyledFooter>
  );
};
