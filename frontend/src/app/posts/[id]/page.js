"use client";

import Link from "next/link";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function PostDetail({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/blogs/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setError("Post not found"));
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:8000/api/blogs/${id}`);
        router.push("/posts");
      } catch {
        alert("Failed to delete post.");
      }
    }
  };

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">{error}</h3>
      </div>
    );
  }

  if (!post) return null;

  return (
    <main className="container py-5">
      <h1 className="mb-4">{post.title}</h1>
      <p>{post.content}</p>
      <div className="d-flex gap-3 mt-4">
        <a href="/posts" className="btn btn-outline-primary">
          ← Back to Posts
        </a>
        <Link href={`/posts/${post.id}/edit`} className="btn btn-warning">
          ✏️ Edit
        </Link>

        <button onClick={handleDelete} className="btn btn-danger">
          🗑 Delete
        </button>
      </div>
    </main>
  );
}
