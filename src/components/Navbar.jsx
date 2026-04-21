import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          JR.
        </NavLink>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="nav-cta"
            href="/resume/Jaskeerat-Rai-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
