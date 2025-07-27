export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="display-1 mb-3">Hello, Next.js!</h1>
      <p className="lead mb-4 text-center" style={{ maxWidth: 600 }}>
        Welcome to your awesome Next.js app. Get ready to build something amazing with Bootstrap and Next.js!
      </p>
      <a
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
      >
        Explore Docs
      </a>
    </div>
  );
}
