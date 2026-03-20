import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getYear } from "date-fns/getYear";
import { compareDesc } from "date-fns/compareDesc";

import { isNullOrUndefined } from "@/utils/helpers";

export type Post = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: "Book" | "LLMs" | "Dev" | "TIL";
};

const postsDir = path.join(process.cwd(), "src/content/posts");

export const getPosts = (limit?: number) => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));

  const posts = fileNames
    .map((fileName) => {
      const fileSlug = path.parse(fileName).name;
      const filePath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const {
        data: { title, createdAt, author, label },
      } = matter(fileContents);

      return {
        title,
        createdAt,
        author,
        label,
        slug: fileSlug,
      };
    })
    .sort((post1, post2) => compareDesc(post1.createdAt, post2.createdAt));

  const result = limit ? posts.slice(0, limit) : posts;

  const grouped = Object.groupBy(result, (post) =>
    String(getYear(post.createdAt))
  );

  return { ...grouped } as Record<string, Post[]>;
};

export const getPostSlugs = () => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));
  const fileSlugs = fileNames.map((fileName) => path.parse(fileName).name);

  return fileSlugs;
};

export const getPost = (slug?: string | string[]) => {
  if (isNullOrUndefined(slug)) {
    return;
  }

  try {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const {
      content,
      data: { title, createdAt, author, label },
    } = matter(fileContents);

    return {
      title,
      createdAt,
      author,
      label,
      slug,
      content,
    };
  } catch (error) {
    console.error(`Failed to load post "${slug}":`, error);
  }
};
