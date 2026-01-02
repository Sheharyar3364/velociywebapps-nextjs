"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "CEO, Ansha Trading",
      avatar: "S",
      rating: 5,
      text: "Outstanding work! They delivered our e-commerce platform ahead of schedule and the quality exceeded our expectations. Highly recommend for any web project.",
    },
    {
      name: "Michael Chen",
      role: "Owner, MC Rental Cars",
      avatar: "M",
      rating: 5,
      text: "Professional, responsive, and skilled developers. Our car rental platform has increased bookings by 40% since launch. Worth every penny!",
    },
    {
      name: "Robert Khan",
      role: "Founder, Rex Super Car",
      avatar: "R",
      rating: 5,
      text: "Best development team we've worked with. Clear communication, fixed pricing, and they actually care about the success of your business.",
    },
  ];

  return (
    <section
      id="testimonials"
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
        style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vh, 4rem)" }}
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
          TESTIMONIALS
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          What Our Clients Say
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Real feedback from real clients
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
          gap: "clamp(1.5rem, 3vw, 2rem)",
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              padding: "clamp(2rem, 5vw, 2.5rem)",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "1.25rem",
              }}
            >
              {"★".repeat(testimonial.rating)}
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              {testimonial.text}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--accent))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                }}
              >
                {testimonial.avatar}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                  }}
                >
                  {testimonial.name}
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
