import Image from "next/image";
import blogs from "@/app/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import style from "@/components/blogPreview.module.css";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <main className="post">
      <h1 className={style.pageTitle}>{blog.title}</h1>
      <h2 className={style.blogContainerH2}>{blog.date}</h2>
      <Image src={blog.image} alt={blog.imageAlt} width={1200} height={800} />
      <p className={style.blogP}>{blog.description}</p>

      <Link href={"/blog"} className={style.goBack}>
        {" "}
        ← Back to Blog{" "}
      </Link>
    </main>
  );
}
