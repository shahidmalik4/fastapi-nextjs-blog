import Link from "next/link";
import axios from "axios";

export default async function Posts() {

  const res = await axios.get("http://localhost:8000/api/blogs");
  const posts = res.data;

  return (
    <main className="container py-5">
      <h1 className="mb-4 text-center">Blog Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <Link href={`/posts/${post.id}`} className="text-decoration-none">
                  <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text text-truncate">{post.content}</p>
                <Link href={`/posts/${post.id}`} className="mt-auto btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
