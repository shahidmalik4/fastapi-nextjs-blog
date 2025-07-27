"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const postData = { title, content: body };

    try {
      const res = await axios.post("http://localhost:8000/api/blogs", postData);

      // Redirect to post detail (assuming API returns the new post's ID)
      const newPostId = res.data.id;
      router.push(`/posts/${newPostId}`);
    } catch (error) {
      setErrorMsg(error.response?.data?.detail || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            id="title"
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Content</label>
          <textarea
            id="body"
            className="form-control"
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>
      </form>

      {errorMsg && (
        <div className="alert alert-danger">Error: {errorMsg}</div>
      )}
    </div>
  );
}
