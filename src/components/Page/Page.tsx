import { Header } from "../Header/Header";
import { NiceDiv } from "./PageStyled";
import { Headline1 } from "../Typography/Headline";
interface PageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <div>
        <Header />
        <Headline1>Hello</Headline1>
        <NiceDiv>Hello World</NiceDiv>
      </div>
    </>
  );
};

export default Page;
