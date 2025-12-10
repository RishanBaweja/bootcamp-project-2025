"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const router = useRouter();
  console.log("Rendering CommentForm for slug:", slug);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!user.trim() || !comment.trim()) {
      setError("Please enter your name and a comment.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Failed to add comment.");
      } else {
        setUser("");
        setComment("");

        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "0.5rem",
        maxWidth: "500px",
        padding: "1rem",
        borderRadius: "8px",
        background: "#f6f7f8",
      }}
    >
      <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
        Name
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your name"
          style={{
            width: "100%",
            marginTop: "0.25rem",
            padding: "0.4rem 0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </label>

      <label style={{ fontSize: "0.9rem", fontWeight: 500 }}>
        Comment
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          rows={3}
          style={{
            width: "100%",
            marginTop: "0.25rem",
            padding: "0.4rem 0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
      </label>

      {error && (
        <p style={{ color: "crimson", fontSize: "0.85rem" }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          justifySelf: "flex-start",
          padding: "0.4rem 0.9rem",
          borderRadius: "4px",
          border: "none",
          background: submitting ? "#888" : "#0070f3",
          color: "white",
          cursor: submitting ? "default" : "pointer",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        {submitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
