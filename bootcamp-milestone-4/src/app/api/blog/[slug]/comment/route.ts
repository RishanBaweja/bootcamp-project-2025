import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/database";
import Blog from "@/database/blogSchema";

type IParams = {
  params: Promise<{ slug: string }>;
};

export async function POST(req: NextRequest, context: IParams) {
  await connectDB();
  const { slug } = await context.params;

  const body = await req.json();
  const { user, comment } = body ?? {};

  console.log("POST /api/blog/[slug] hit for slug:", slug, "body:", body);

  if (
    typeof user !== "string" ||
    typeof comment !== "string" ||
    !user.trim() ||
    !comment.trim()
  ) {
    return NextResponse.json(
      { message: "Error on types entered. Expected type Strings." },
      { status: 400 }
    );
  }

  try {
    const newComment = {
      user: user.trim(),
      comment: comment.trim(),
      time: new Date(),
    };
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        $push: {
          comments: newComment,
        },
      },
      { new: true }
    ).lean();

    if (!updatedBlog) {
      return NextResponse.json(
        { message: "Blog not found, slug is unknown." },
        { status: 404 }
      );
    }
    return NextResponse.json(newComment, { status: 201 });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { message: "Failed to add comment" },
      { status: 500 }
    );
  }
}
