import { getAllPages, getPageBySlug } from "@/util/posts";
import { markdownToHtml } from "@/util/markdown";
import Page from "@/components/Page";

interface InsidePagesProps {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
  };
  content: string;
}

export default function InsidePages({
  slug,
  frontmatter,
  content,
}: InsidePagesProps) {
  const { title, description } = frontmatter;
  return (
    <Page
      title={title}
      slug={slug}
      description={description}
      content={content}
    />
  );
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
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
