"use client";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description:
        "Free 30-minute consultation to understand your vision, goals, and requirements",
    },
    {
      number: "2",
      title: "Proposal & Quote",
      description:
        "Detailed project scope, timeline, and fixed-price quote within 24 hours",
    },
    {
      number: "3",
      title: "Design & Development",
      description:
        "Weekly updates, live previews, and your feedback incorporated in real-time",
    },
    {
      number: "4",
      title: "Testing & Launch",
      description:
        "Thorough QA testing, deployment, and training on how to manage your platform",
    },
    {
      number: "5",
      title: "Ongoing Support",
      description:
        "Post-launch support, maintenance, and feature updates included in every package",
    },
  ];

  return (
    <>
      <style jsx>{`
        .process-timeline {
          max-width: 900px;
          margin: 3rem auto 0;
          position: relative;
        }

        .process-timeline::before {
          content: "";
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--primary), var(--accent));
        }

        .process-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 900;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .process-timeline::before {
            left: 24px;
          }

          .process-number {
            width: 48px;
            height: 48px;
            font-size: 1.25rem;
          }
        }
      `}</style>

      <section
        id="process"
        style={{
          position: "relative",
          padding: "clamp(4rem, 10vh, 8rem) clamp(1rem, 5vw, 2rem)",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 1,
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
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
            OUR PROCESS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            How We Work
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Simple, transparent process from idea to launch
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: idx !== steps.length - 1 ? "3rem" : "0",
                position: "relative",
              }}
            >
              <div className="process-number">{step.number}</div>
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
