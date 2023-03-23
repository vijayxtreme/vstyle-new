import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { getAllPages, getPageBySlug } from "@/util/posts";
import { markdownToHtml } from "@/util/markdown";
import { Container } from "@/components/Container/ContainerStyled";

export default function InsidePages({ meta, content }) {
  return (
    <div>
      <Header />
      {meta}
      <Container maxWidth="1200px" marginBottom="3rem" marginTop="3rem">
        <section dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ params }) {
  const page = getPageBySlug(params.slug);
  const content = await markdownToHtml(page.content || "");
  return {
    props: {
      ...page,
      content,
    },
  };
}

export async function getStaticPaths() {
  const pages = getAllPages();

  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
