import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      style={{
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h1>404</h1>

      <p>Page not found.</p>

      <Link to="/">Go Home</Link>
    </section>
  );
}