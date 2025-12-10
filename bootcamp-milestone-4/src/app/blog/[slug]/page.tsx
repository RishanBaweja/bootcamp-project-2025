import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import style from "@/components/blogPreview.module.css";
import CommentItem from "@/components/comment";
import CommentForm from "@/components/commentForm";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

// Load ONE blog directly from MongoDB
async function getBlog(slug: string) {
  await connectDB();

  const doc = await Blog.findOne({ slug }).lean();

  if (!doc) return null;

  // mirror the shape you use in getBlogs()
  return {
    ...doc,
    _id: doc._id.toString(),
    date: doc.date?.toISOString(),
    comments: (doc.comments ?? []).map((c: any) => ({
      ...c,
      _id: c._id?.toString(),
      authorId: c.authorId?.toString?.(),
      date: c.date?.toISOString(),
    })),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // Next 16: params is a Promise
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
