import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const pagesDirectory = join(process.cwd(), "src/_pages");

export function getPageBySlug(slug: any) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data, content };
}

export function getAllPages() {
  const slugs = fs.readdirSync(pagesDirectory);
  const pages = slugs.map((slug) => getPageBySlug(slug));
  // sort posts by date in descending order
  return pages;
}
