"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <style jsx>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--text);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: transform 0.3s;
          position: relative;
          z-index: 1001;
        }

        .logo-container:hover {
          transform: scale(1.03);
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.25rem;
          color: white;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          position: relative;
          overflow: hidden;
        }

        .logo-icon::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-text-main {
          font-size: 1.375rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
        }

        .logo-text-accent {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-tagline {
          font-size: 0.625rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 0.125rem;
        }

        .cta-button {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          padding: 0.625rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          white-space: nowrap;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
        }

        /* Desktop Navigation */
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          align-items: center;
          margin: 0;
        }

        /* Hamburger Menu Styles */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
          position: relative;
          background: none;
          border: none;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: white;
          border-radius: 3px;
          transition: all 0.3s;
          display: block;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile Menu Overlay */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          padding: 6rem 2rem 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          overflow-y: auto;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu .nav-link {
          font-size: 1.5rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
          color: white;
        }

        .mobile-menu .nav-link:hover {
          color: var(--primary);
        }

        .mobile-menu .cta-button {
          display: block;
          text-align: center;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          margin-top: 1rem;
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .logo-text-main {
            font-size: 1.125rem;
          }

          .logo-icon {
            width: 36px;
            height: 36px;
            font-size: 1.125rem;
          }

          .logo-tagline {
            font-size: 0.55rem;
          }
        }

        @media (max-width: 480px) {
          .logo-text-main {
            font-size: 1rem;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }

          .logo-tagline {
            display: none;
          }

          .mobile-menu .nav-link {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 375px) {
          .logo-text-main {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 100,
          background: scrolled
            ? "rgba(10, 10, 10, 0.98)"
            : "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(99, 102, 241, 0.2)"
            : "1px solid var(--border)",
          transition: "all 0.3s",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "1rem clamp(1rem, 5vw, 2rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <a href="/" className="logo-container">
            <div className="logo-icon">
              <span style={{ position: "relative", zIndex: 1 }}>V</span>
            </div>
            <div className="logo-text-wrapper">
              <div className="logo-text-main">
                Velocity<span className="logo-text-accent">WebApps</span>
              </div>
              <div className="logo-tagline">Premium Devs</div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {["Services", "Portfolio", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="cta-button">
                Get Started →
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          {["Services", "Portfolio", "Pricing", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={handleLinkClick}
              >
                {item}
              </a>
            )
          )}
          <a href="#contact" className="cta-button" onClick={handleLinkClick}>
            Get Started →
          </a>
        </nav>
      </div>
    </>
  );
}
