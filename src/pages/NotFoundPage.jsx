import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function NotFoundPage() {
  return (
    <section className="section page-shell">
      <div className="container narrow">
        <Reveal className="not-found-card">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you requested does not exist.</p>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
