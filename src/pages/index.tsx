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
          portfolio given that the traditional 'paper' resume feels a bit
          incomplete in this modern era. It feels a bit impossible to sum up
          EVERYTHING about me onto two pieces of paper.
        </p>
        <p>
          I realize some people just want the "cliff notes", and so yes I would
          hand them a resume, but for those who are more detail oriented like
          myself, I think they would appreciate a website like this.
        </p>
        <h2>So Who Am I?</h2>
        <p>
          I go by Vijay (rhymes with D.J.), or if you are an Indian, you’ll know
          my name sounds more like "Vih" jay. Either way is fine with me, so
          long as you don’t call me VY-JAY or my favorite (V-HEY) — totally
          wrong. It goes without saying, if you butcher my name — I probably
          might ignore you on voicemail :). (Thank God for email right?). As for
          my last name; it sounds like "Men" -"Inn".{" "}
          <a
            href="https://vijay.style/#:~:text=like%20%22Men%22%20%2D%22Inn%22.-,%22By%20Mennen!%22,-For%20the%20past"
            target={"_blank"}
            rel="noreferrer"
          >
            By Mennen!"
          </a>
        </p>
        <p>
          For the past 10 years, I’ve been working in sunny Southern California
          as a self-taught web developer using programming languages like PHP
          and JavaScript. My specialty has been building websites using
          platforms like Wordpress, Drupal, Zend and Django. Along the way, I
          also started a group called{" "}
          <a
            href="https://www.hackbuddy.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            Hackbuddy
          </a>{" "}
          which helps developers like myself become better with JavaScript tools
          and frameworks like React, Angular and Vue.js. I have also mentored
          and taught at coding bootcamps like General Assembly and Thinkful —
          all which I can say has helped me really understand how to learn and
          study better, and help others as well get up to speed on changing
          technologies.
        </p>
      </Container>
      <Footer />
    </>
  );
}
