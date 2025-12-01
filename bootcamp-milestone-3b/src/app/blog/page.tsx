import BlogPreview from "@/components/blogPreview";
import style from "@/components/blogPreview.module.css";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();
  const docs = await Blog.find().sort({ date: -1 }).lean();

  return docs.map((d) => ({
    ...d,
    _id: d._id.toString(),
    date: d.date?.toISOString(),

    comments: (d.comments ?? []).map((c: any) => ({
      ...c,
      _id: c._id?.toString(),
      authorId: c.authorId?.toString?.(),
      date: c.date?.toISOString(),
    })),
  }));
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className={style.cardsContainer}>
      {blogs.map((b) => (
        <BlogPreview key={b._id} {...b} />
      ))}
    </div>
  );
}
