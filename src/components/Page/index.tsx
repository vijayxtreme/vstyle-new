import { Header } from "../Header/Header";
import Head from "next/head";
import BreadCrumbs from "@/components/Breadcrumbs";

import { Footer } from "@/components/Footer/Footer";
import { Container } from "@/components/Container/ContainerStyled";
import { PageStyled } from "./PageStyled";

interface PageProps {
  title: string;
  slug: string;
  description?: string;
  content: string;
}

export default function Page({ title, slug, description, content }: PageProps) {
  return (
    <PageStyled>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description ?? ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumbs slug={slug} />
      <Container maxWidth="1200px" marginBottom="3rem" marginTop="3rem">
        <section
          className={`content`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
      <Footer />
    </PageStyled>
  );
}
