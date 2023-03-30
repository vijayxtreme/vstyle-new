import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { EN_US as lang } from "@/lang/en-US";
import { Jumbo } from "@/components/Jumbo/Jumbo";
import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/ContainerStyled";

export default function Home() {
  return (
    <>
      <Head>
        <title>{lang.siteName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Jumbo />
      </main>
      <Container maxWidth="1200px" marginTop="3rem" marginBottom="3rem">
        <h2>Thanks for Visiting!</h2>
        <p>
          Hi, and welcome to my web developer portfolio. I decided to create a
          portfolio given that the traditional paper resume feels a bit
          incomplete in this modern era. It feels a bit impossible to sum up
          EVERYTHING about me onto two pieces of paper.
        </p>
        <p>
          I realize some people just want the cliff notes, and so yes I would
          hand them a resume, but for those who are more detail oriented like
          myself, I think they would appreciate a website like this.
        </p>
        <p>
          My specialty has been building websites using platforms like React,
          Node, Next.js, GraphQL, Drupal, Wordpress, and more. Along the way, I
          also started a group called{" "}
          <a
            href="https://www.hackbuddy.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            Hackbuddy
          </a>{" "}
          which helps developers like myself become better at software
          engineering. I have also mentored and taught at coding bootcamps like
          General Assembly and Thinkful — all which I can say has helped me
          really understand how to learn and study better, and help others as
          well get up to speed on changing technologies.
        </p>
      </Container>
      <Footer />
    </>
  );
}
