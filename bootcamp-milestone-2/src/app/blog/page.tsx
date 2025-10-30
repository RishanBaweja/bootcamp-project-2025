import blogs, { Blog } from "@/app/blogData";
import BlogPreview from "@/components/blogPreview";

export default function BlogPage() {
  return (
    <main>
      <h1>Rishan's Blog Posts!</h1>
      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
      <footer className="footer">
        © 2025 Rishan Baweja's Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
