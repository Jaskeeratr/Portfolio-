export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>&copy; {new Date().getFullYear()} Jaskeerat Rai. Built for impact.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/jaskeeratr22/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Jaskeeratr" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
