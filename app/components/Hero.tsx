"use client";

export default function Hero() {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }

        .hero-bg {
          background: #0a0a0a;
          position: relative;
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(99, 102, 241, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99, 102, 241, 0.03) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.15) 0%,
            transparent 70%
          );
          top: -10%;
          right: -5%;
          animation: float-slow 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.12) 0%,
            transparent 70%
          );
          bottom: -10%;
          left: -5%;
          animation: float-slow 25s ease-in-out infinite reverse;
        }

        .stat-card {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 1.25rem;
          padding: clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          background: rgba(20, 20, 20, 0.8);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        .primary-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
          color: white;
          padding: clamp(0.875rem, 2.5vw, 1.125rem) clamp(1.5rem, 5vw, 2.75rem);
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: clamp(0.9375rem, 2.2vw, 1.0625rem);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);
          border: none;
          min-height: 44px;
          white-space: nowrap;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.5);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.03);
          color: white;
          padding: clamp(0.875rem, 2.5vw, 1.125rem) clamp(1.5rem, 5vw, 2.75rem);
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: clamp(0.9375rem, 2.2vw, 1.0625rem);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
          min-height: 44px;
          white-space: nowrap;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-3px);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: clamp(0.625rem, 2vw, 0.75rem) clamp(1.25rem, 4vw, 1.75rem);
          border-radius: 3rem;
          font-size: clamp(0.8125rem, 2vw, 0.9375rem);
          font-weight: 600;
          color: #10b981;
        }

        .pulse-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .orb-1,
          .orb-2 {
            width: 300px;
            height: 300px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }

          .trust-indicators {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }

          .availability-badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }

          .pulse-dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>

      <section
        className="hero-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding:
            "clamp(6rem, 15vh, 8rem) clamp(1rem, 5vw, 2rem) clamp(4rem, 10vh, 6rem)",
          overflow: "hidden",
        }}
      >
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>

        {/* Glow Orbs */}
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Availability Badge */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="availability-badge">
              <span className="pulse-dot"></span>
              <span>Available 7 days/week • 2 hour response</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "2rem",
              letterSpacing: "-0.04em",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                display: "block",
              }}
            >
              Build Your Dream
            </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
                marginTop: "0.5rem",
              }}
            >
              Website or App
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "900px",
              margin: "0 auto 3.5rem",
              lineHeight: 1.65,
              fontWeight: 400,
              padding: "0 1rem",
            }}
          >
            <strong style={{ color: "white", fontWeight: 700 }}>
              Fixed pricing from $750.
            </strong>{" "}
            Custom web & mobile apps with Laravel, React, and Next.js. Delivered
            in{" "}
            <strong style={{ color: "white", fontWeight: 700 }}>
              2-8 weeks
            </strong>{" "}
            with ongoing support.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "clamp(3rem, 8vh, 5rem)",
              padding: "0 1rem",
            }}
          >
            <a href="#contact" className="primary-btn">
              Get Free Quote
              <span style={{ fontSize: "1.25rem" }}>→</span>
            </a>
            <a href="#portfolio" className="secondary-btn">
              View Our Work
              <span style={{ fontSize: "1.25rem" }}>↓</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1100px",
              margin: "0 auto 3.5rem",
            }}
          >
            {[
              { number: "50+", label: "Projects Delivered", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "2-8", label: "Weeks to Launch", icon: "⚡" },
              { number: "24/7", label: "Support Available", icon: "💬" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 2.25rem)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.25rem)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #6366F1, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    marginBottom: "0.625rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.8125rem, 2vw, 0.9375rem)",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className="trust-indicators"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.5rem, 5vw, 3rem)",
              flexWrap: "wrap",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                  lineHeight: 1,
                }}
              >
                ⭐⭐⭐⭐⭐
              </span>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  5.0 Rating
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "0.125rem",
                  }}
                >
                  From 30+ clients
                </div>
              </div>
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: 500,
              }}
            >
              ✓ Fixed Pricing
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: 500,
              }}
            >
              ✓ Money-Back Guarantee
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                fontWeight: 500,
              }}
            >
              ✓ 100% Code Ownership
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
