import Image from "next/image";
import blogs from "@/app/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import style from "@/components/blogPreview.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
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

      <Link href={"/blog"} className={style.goBack}>
        {" "}
        ← Back to Blog{" "}
      </Link>
    </main>
  );
}
