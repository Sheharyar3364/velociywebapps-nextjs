"use client";

import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const projects = [
    {
      image: "/ansha-trading-home.png",
      title: "Ansha Trading",
      description:
        "Modern e-commerce platform for trading business with inventory management and order tracking",
      tags: ["Laravel", "React", "MySQL"],
    },
    {
      image: "/mc-rental-car-home.jpeg",
      title: "MC Rental Cars",
      description:
        "Luxury car rental platform with real-time booking and payment processing integration",
      tags: ["Next.js", "Laravel API", "Stripe"],
      metrics: [
        { value: "+40%", label: "Bookings" },
        { value: "$2.5K", label: "Monthly Revenue" },
        { value: "4.9★", label: "Client Rating" },
      ],
    },
    {
      image: "/rex-super-car-home.jpeg",
      title: "Rex Super Car",
      description:
        "Premium automotive showcase website with advanced filtering and inquiry system",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <>
      <style jsx>{`
        .portfolio-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s;
        }

        .portfolio-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
          border-color: var(--primary);
        }

        .portfolio-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 60%;
          overflow: hidden;
          cursor: pointer;
        }

        .portfolio-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .portfolio-item:hover .portfolio-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .portfolio-image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .tech-tag {
          padding: 0.375rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          color: var(--primary);
        }
      `}</style>

      <section
        id="portfolio"
        style={{
          position: "relative",
          padding: "clamp(4rem, 10vh, 8rem) clamp(1rem, 5vw, 2rem)",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vh, 4rem)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.25rem",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: "2rem",
              fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "var(--primary)",
            }}
          >
            PORTFOLIO
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Our Recent Work
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Real projects, real results for real businesses
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="portfolio-item">
              <div
                className="portfolio-image-wrapper"
                onClick={() => setLightboxSrc(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="image-overlay">
                  <span style={{ fontSize: "2rem" }}>🔍</span>
                </div>
              </div>
              <div style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {project.description}
                </p>

                {project.metrics && (
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      margin: "1.5rem 0",
                      padding: "1rem",
                      background: "rgba(99, 102, 241, 0.05)",
                      borderRadius: "0.75rem",
                    }}
                  >
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: 900,
                            color: "var(--success)",
                          }}
                        >
                          {metric.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            padding: "2rem",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              fontSize: "3rem",
              color: "white",
              cursor: "pointer",
              zIndex: 10000,
            }}
            onClick={() => setLightboxSrc(null)}
          >
            &times;
          </span>
          <img
            src={lightboxSrc}
            alt="Portfolio"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}
