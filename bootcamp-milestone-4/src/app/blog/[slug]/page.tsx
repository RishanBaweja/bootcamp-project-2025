import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import style from "@/components/blogPreview.module.css";
import CommentItem from "@/components/comment";
import CommentForm from "@/components/commentForm";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  return (
    <main className="post">
      <h1 className={style.pageTitle}>{blog.title}</h1>
      <h2 className={style.blogContainerH2}>{blog.date}</h2>

      <Image src={blog.image} alt={blog.imageAlt} width={1200} height={800} />

      <p className={style.blogP}>{blog.description}</p>

      <section style={{ marginTop: "2rem" }}>
        <h3 style={{ marginBottom: "0.75rem" }}>Comments</h3>

        <div style={{ marginBottom: "1.5rem" }}>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: any, index: number) => (
              <CommentItem key={index} comment={comment} />
            ))
          ) : (
            <p style={{ fontStyle: "italic", color: "#666" }}>
              No comments yet.
            </p>
          )}
        </div>

        <CommentForm slug={slug} />
      </section>

      <Link href={"/blog"} className={style.goBack}>
        ← Back to Blog
      </Link>
    </main>
  );
}
