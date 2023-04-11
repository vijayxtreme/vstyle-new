import Link from "next/link";
import { EN_US as lang } from "@/lang/en-US";
import { Nav } from "@/components/Nav/NavStyled";
import { NavContainer } from "@/components/Container/ContainerStyled";
import { AuthorH2 } from "./HeaderStyled";
import { upper } from "@/util/util";

export const Header = () => {
  return (
    <NavContainer>
      {/** TODO: Refactor */}
      <AuthorH2>
        <Link href="/">{lang.author} | Portfolio</Link>
      </AuthorH2>
      <Nav>
        <ul>
          {lang.nav.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{upper(item.name)}</a>
            </li>
          ))}
        </ul>
      </Nav>
    </NavContainer>
  );
};
