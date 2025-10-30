import Image from "next/image";
import blogs from "@/app/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

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
      <h1>{blog.title}</h1>
      <small>{blog.date}</small>
      <Image src={blog.image} alt={blog.imageAlt} width={1200} height={800} />
      <article>{blog.description}</article>

      <Link href="/blog">← Back to Blog</Link>
    </main>
  );
}
